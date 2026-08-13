const express = require('express');
const pool = require('../db');
const { requireAuth, requireAdmin } = require('../middleware/auth');

const router = express.Router();

function serializeDeal(row) {
  return {
    id: row.id,
    memberId: row.member_id,
    projectName: row.project_name,
    amount: Number(row.amount_from_client),
    commissionPct: Number(row.commission_percentage),
    commissionAmount: Number(row.commission_amount),
    date: row.deal_date,
  };
}

// GET /api/deals/member/:memberId — admin can view anyone's; marketing member only their own
router.get('/member/:memberId', requireAuth, async (req, res) => {
  if (req.user.role !== 'admin' && req.user.id !== req.params.memberId) {
    return res.status(403).json({ error: 'forbidden' });
  }
  const { rows } = await pool.query(
    'SELECT * FROM deals WHERE member_id = $1 ORDER BY deal_date DESC, created_at DESC',
    [req.params.memberId]
  );
  res.json(rows.map(serializeDeal));
});

function validateDealBody(body) {
  const projectName = (body.projectName || '').trim();
  const amount = Number(body.amount);
  const commissionPct = Number(body.commissionPct);
  const date = body.date || new Date().toISOString().slice(0, 10);
  if (!projectName) return { error: 'project_required' };
  if (Number.isNaN(amount) || amount <= 0) return { error: 'invalid_amount' };
  if (Number.isNaN(commissionPct) || commissionPct < 0 || commissionPct > 100) return { error: 'invalid_commission' };
  return { projectName, amount, commissionPct, date };
}

// POST /api/deals  (admin only)  body: { memberId, projectName, amount, commissionPct, date }
router.post('/', requireAuth, requireAdmin, async (req, res) => {
  const memberId = req.body && req.body.memberId;
  if (!memberId) return res.status(400).json({ error: 'member_required' });

  const parsed = validateDealBody(req.body || {});
  if (parsed.error) return res.status(400).json({ error: parsed.error });

  // Commission amount is always computed server-side — never trust the client's number.
  const commissionAmount = Math.round(parsed.amount * parsed.commissionPct) / 100;

  const { rows } = await pool.query(
    `INSERT INTO deals (member_id, project_name, amount_from_client, commission_percentage, commission_amount, deal_date)
     VALUES ($1,$2,$3,$4,$5,$6)
     RETURNING *`,
    [memberId, parsed.projectName, parsed.amount, parsed.commissionPct, commissionAmount, parsed.date]
  );
  res.status(201).json(serializeDeal(rows[0]));
});

// PUT /api/deals/:id  (admin only)
router.put('/:id', requireAuth, requireAdmin, async (req, res) => {
  const parsed = validateDealBody(req.body || {});
  if (parsed.error) return res.status(400).json({ error: parsed.error });

  const commissionAmount = Math.round(parsed.amount * parsed.commissionPct) / 100;

  const { rows } = await pool.query(
    `UPDATE deals SET project_name=$1, amount_from_client=$2, commission_percentage=$3,
       commission_amount=$4, deal_date=$5
     WHERE id=$6
     RETURNING *`,
    [parsed.projectName, parsed.amount, parsed.commissionPct, commissionAmount, parsed.date, req.params.id]
  );
  if (rows.length === 0) return res.status(404).json({ error: 'not_found' });
  res.json(serializeDeal(rows[0]));
});

// DELETE /api/deals/:id  (admin only)
router.delete('/:id', requireAuth, requireAdmin, async (req, res) => {
  const { rowCount } = await pool.query('DELETE FROM deals WHERE id = $1', [req.params.id]);
  if (rowCount === 0) return res.status(404).json({ error: 'not_found' });
  res.json({ ok: true });
});

module.exports = router;
