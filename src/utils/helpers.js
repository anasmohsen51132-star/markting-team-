const pool = require('../db');

/** Generates a random 4-digit serial guaranteed not to collide with an existing member. */
async function generateUniqueSerial() {
  for (let attempt = 0; attempt < 25; attempt++) {
    const candidate = String(Math.floor(1000 + Math.random() * 9000));
    const { rows } = await pool.query('SELECT 1 FROM members WHERE serial_number = $1', [candidate]);
    if (rows.length === 0) return candidate;
  }
  throw new Error('Could not generate a unique serial after 25 attempts');
}

/** Best-effort client identifier for rate limiting (works behind Vercel's proxy). */
function clientKey(req) {
  const fwd = req.headers['x-forwarded-for'];
  if (fwd) return fwd.split(',')[0].trim();
  return req.socket && req.socket.remoteAddress ? req.socket.remoteAddress : 'unknown';
}

module.exports = { generateUniqueSerial, clientKey };
