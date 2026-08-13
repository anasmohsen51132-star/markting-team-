/**
 * Creates the schema on Neon and seeds a demo admin + 2 marketing members
 * with sample deals, so the platform isn't empty on first run.
 * Safe to re-run: uses IF NOT EXISTS / ON CONFLICT guards.
 *
 * Usage: npm run db:init   (reads DATABASE_URL from .env)
 */
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const pool = require('../src/db');

async function run() {
  if (!process.env.DATABASE_URL) {
    console.error('DATABASE_URL is not set. Copy .env.example to .env and fill it in first.');
    process.exit(1);
  }

  const schema = fs.readFileSync(path.join(__dirname, '..', 'db', 'schema.sql'), 'utf8');
  console.log('→ Creating schema...');
  await pool.query(schema);

  console.log('→ Seeding demo data (skipped for any serial that already exists)...');

  const members = [
    { name: 'Admin', serial: '0001', role: 'admin', commission: 0, contact: null },
    { name: 'Sara Youssef', serial: '1001', role: 'marketing', commission: 12, contact: 'sara@autoflow.dev' },
    { name: 'Omar Khaled', serial: '1002', role: 'marketing', commission: 10, contact: 'omar@autoflow.dev' },
  ];

  const memberIds = {};
  for (const m of members) {
    const { rows } = await pool.query(
      `INSERT INTO members (name, serial_number, role, commission_percentage, contact)
       VALUES ($1,$2,$3,$4,$5)
       ON CONFLICT (serial_number) DO UPDATE SET name = members.name
       RETURNING id, serial_number`,
      [m.name, m.serial, m.role, m.commission, m.contact]
    );
    memberIds[m.serial] = rows[0].id;
  }

  const { rows: existingDeals } = await pool.query('SELECT COUNT(*)::int AS c FROM deals');
  if (existingDeals[0].c === 0) {
    const deals = [
      { serial: '1001', project: 'Nova Retail AI Chatbot', amount: 180000, pct: 12, date: '2026-02-14' },
      { serial: '1001', project: 'Lumen LMS Rollout', amount: 95000, pct: 12, date: '2026-04-02' },
      { serial: '1001', project: 'Falcon Ops Automation', amount: 140000, pct: 12, date: '2026-06-19' },
      { serial: '1002', project: 'Orbit CRM Integration', amount: 120000, pct: 10, date: '2026-03-05' },
      { serial: '1002', project: 'Atlas Support Bot', amount: 60000, pct: 10, date: '2026-05-28' },
    ];
    for (const d of deals) {
      const commissionAmount = Math.round(d.amount * d.pct) / 100;
      await pool.query(
        `INSERT INTO deals (member_id, project_name, amount_from_client, commission_percentage, commission_amount, deal_date)
         VALUES ($1,$2,$3,$4,$5,$6)`,
        [memberIds[d.serial], d.project, d.amount, d.pct, commissionAmount, d.date]
      );
    }
    console.log('→ Seeded 5 demo deals.');
  } else {
    console.log('→ Deals already exist, skipped demo deals.');
  }

  console.log('\n✔ Done. Demo serials:');
  console.log('   Admin:      0001');
  console.log('   Marketing:  1001 (Sara), 1002 (Omar)');
  await pool.end();
}

run().catch((err) => {
  console.error('DB init failed:', err);
  process.exit(1);
});
