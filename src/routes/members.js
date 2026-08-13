const express = require('express');
const pool = require('../db');
const { requireAuth, requireAdmin } = require('../middleware/auth');
const { generateUniqueSerial } = require('../utils/helpers');

const router = express.Router();

function serializeMember(row) {
  return {
    id: row.id,
    name: row.name,
    serial: row.serial_number,
    role: row.role,
    commission: Number(row.commission_percentage),
    contact: row.contact,
    createdAt: row.created_at,
    dealCount: row.deal_count !== undefined ? Number(row.deal_count) : undefined,
    totalEarnings: row.total_earnings !== undefined ? Number(row.total_earnings) : undefined,
  };
}

// GET /api/members  (admin only) — marketing members with aggregated deal stats
router.get('/', requireAuth, requireAdmin, async (req, res) => {
  const { rows } = await pool.query(`
    SELECT m.*,
           COUNT(d.id) AS deal_count,
           COALESCE(SUM(d.commission_amount), 0) AS total_earnings
    FROM members m
    LEFT JOIN deals d ON d.member_id = m.id
    WHERE m.role = 'marketing'
    GROUP BY m.id
    ORDER BY m.created_at DESC
  `);
  res.json(rows.map(serializeMember));
});

// GET /api/members/overview  (admin only) — dashboard stat cards
router.get('/overview', requireAuth, requireAdmin, async (req, res) => {
  const totalsQ = pool.query(`
    SELECT COALESCE(SUM(amount_from_client),0) AS revenue,
           COALESCE(SUM(commission_amount),0) AS commissions
    FROM deals
  `);
  const memberCountQ = pool.query(`SELECT COUNT(*)::int AS c FROM members WHERE role = 'marketing'`);
  const topQ = pool.query(`
    SELECT m.id, m.name, COALESCE(SUM(d.commission_amount),0) AS total
    FROM members m
    LEFT JOIN deals d ON d.member_id = m.id
    WHERE m.role = 'marketing'
    GROUP BY m.id
    ORDER BY total DESC
    LIMIT 1
  `);

  const [totalsRes, memberCountRes, topRes] = await Promise.all([totalsQ, memberCountQ, topQ]);
  const top = topRes.rows[0];

  res.json({
    totalRevenue: Number(totalsRes.rows[0].revenue),
    totalCommissions: Number(totalsRes.rows[0].commissions),
    activeMembers: memberCountRes.rows[0].c,
    topPerformer: top ? { id: top.id, name: top.name, total: Number(top.total) } : null,
  });
});

// GET /api/members/generate-serial  (admin only) — a guaranteed-unique 4-digit serial
router.get('/generate-serial', requireAuth, requireAdmin, async (req, res) => {
  const serial = await generateUniqueSerial();
  res.json({ serial });
});

// GET /api/members/:id — admin can view anyone; a marketing member can only view themself
router.get('/:id', requireAuth, async (req, res) => {
  if (req.user.role !== 'admin' && req.user.id !== req.params.id) {
    return res.status(403).json({ error: 'forbidden' });
  }
  const { rows } = await pool.query(`
    SELECT m.*,
           COUNT(d.id) AS deal_count,
           COALESCE(SUM(d.commission_amount), 0) AS total_earnings
    FROM members m
    LEFT JOIN deals d ON d.member_id = m.id
    WHERE m.id = $1
    GROUP BY m.id
  `, [req.params.id]);
  if (rows.length === 0) return res.status(404).json({ error: 'not_found' });
  res.json(serializeMember(rows[0]));
});

// POST /api/members  (admin only) — create a marketing member
// body: { name, contact?, commission, serialMode: 'manual'|'auto', serial? }
router.post('/', requireAuth, requireAdmin, async (req, res) => {
  const { name, contact, commission, serialMode, serial } = req.body || {};

  const cleanName = (name || '').trim();
  if (!cleanName) return res.status(400).json({ error: 'name_required' });

  const commissionNum = Number(commission);
  if (Number.isNaN(commissionNum) || commissionNum < 0 || commissionNum > 100) {
    return res.status(400).json({ error: 'invalid_commission' });
  }

  let finalSerial;
  if (serialMode === 'auto') {
    finalSerial = await generateUniqueSerial();
  } else {
    finalSerial = (serial || '').trim();
    if (!/^\d{4}$/.test(finalSerial)) {
      return res.status(400).json({ error: 'invalid_serial_format' });
    }
    const { rows: dupe } = await pool.query('SELECT 1 FROM members WHERE serial_number = $1', [finalSerial]);
    if (dupe.length > 0) {
      return res.status(409).json({ error: 'serial_taken' });
    }
  }

  try {
    const { rows } = await pool.query(
      `INSERT INTO members (name, serial_number, role, commission_percentage, contact)
       VALUES ($1,$2,'marketing',$3,$4)
       RETURNING *`,
      [cleanName, finalSerial, commissionNum, (contact || '').trim() || null]
    );
    res.status(201).json(serializeMember({ ...rows[0], deal_count: 0, total_earnings: 0 }));
  } catch (err) {
    if (err.code === '23505') return res.status(409).json({ error: 'serial_taken' });
    console.error(err);
    res.status(500).json({ error: 'server_error' });
  }
});

module.exports = router;
