const express = require('express');
const jwt = require('jsonwebtoken');
const pool = require('../db');
const { requireAuth, COOKIE_NAME } = require('../middleware/auth');
const { clientKey } = require('../utils/helpers');

const router = express.Router();

const MAX_ATTEMPTS = 5;
const LOCKOUT_MS = 30 * 1000;
const isProd = process.env.NODE_ENV === 'production';

const cookieOptions = {
  httpOnly: true,
  secure: isProd,
  sameSite: isProd ? 'none' : 'lax',
  maxAge: 12 * 60 * 60 * 1000, // 12h
  path: '/',
};

async function getAttempt(key) {
  const { rows } = await pool.query('SELECT * FROM login_attempts WHERE client_key = $1', [key]);
  return rows[0] || null;
}

async function recordFailure(key) {
  const existing = await getAttempt(key);
  const nextCount = (existing ? existing.fail_count : 0) + 1;
  const lockedUntil = nextCount >= MAX_ATTEMPTS ? new Date(Date.now() + LOCKOUT_MS) : null;
  await pool.query(
    `INSERT INTO login_attempts (client_key, fail_count, locked_until, updated_at)
     VALUES ($1,$2,$3, now())
     ON CONFLICT (client_key) DO UPDATE
     SET fail_count = $2, locked_until = $3, updated_at = now()`,
    [key, nextCount, lockedUntil]
  );
  return { failCount: nextCount, lockedUntil };
}

async function resetAttempts(key) {
  await pool.query('DELETE FROM login_attempts WHERE client_key = $1', [key]);
}

// POST /api/auth/login  { serial: "1234" }
router.post('/login', async (req, res) => {
  const key = clientKey(req);
  const existing = await getAttempt(key);

  if (existing && existing.locked_until && new Date(existing.locked_until) > new Date()) {
    return res.status(429).json({
      error: 'locked',
      lockedUntil: existing.locked_until,
    });
  }

  const serial = (req.body && req.body.serial ? String(req.body.serial) : '').trim();
  if (!/^\d{4}$/.test(serial)) {
    return res.status(400).json({ error: 'invalid_format' });
  }

  const { rows } = await pool.query('SELECT * FROM members WHERE serial_number = $1', [serial]);
  if (rows.length === 0) {
    const result = await recordFailure(key);
    if (result.lockedUntil) {
      return res.status(429).json({ error: 'locked', lockedUntil: result.lockedUntil });
    }
    return res.status(401).json({ error: 'invalid_serial', attemptsLeft: MAX_ATTEMPTS - result.failCount });
  }

  await resetAttempts(key);
  const member = rows[0];
  const token = jwt.sign({ id: member.id, role: member.role }, process.env.JWT_SECRET, { expiresIn: '12h' });
  res.cookie(COOKIE_NAME, token, cookieOptions);
  res.json({
    id: member.id,
    name: member.name,
    role: member.role,
    serial: member.serial_number,
  });
});

// POST /api/auth/logout
router.post('/logout', (req, res) => {
  res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: undefined });
  res.json({ ok: true });
});

// GET /api/auth/me
router.get('/me', requireAuth, async (req, res) => {
  const { rows } = await pool.query('SELECT id, name, role, serial_number, commission_percentage, contact, created_at FROM members WHERE id = $1', [req.user.id]);
  if (rows.length === 0) return res.status(401).json({ error: 'not_authenticated' });
  const m = rows[0];
  res.json({
    id: m.id,
    name: m.name,
    role: m.role,
    serial: m.serial_number,
    commission: Number(m.commission_percentage),
    contact: m.contact,
    createdAt: m.created_at,
  });
});

module.exports = router;
