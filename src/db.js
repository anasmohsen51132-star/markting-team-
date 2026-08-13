const { Pool } = require('pg');

const connectionString = process.env.DATABASE_URL;

const pool = new Pool({
  connectionString,
  // Neon requires SSL. If the connection string already has sslmode=require
  // this is redundant but harmless; kept explicit for hosts that don't set it.
  ssl: connectionString && connectionString.includes('sslmode=require')
    ? { rejectUnauthorized: false }
    : undefined,
  // Serverless functions handle low concurrency per instance — keep the pool
  // small so we don't try to open more connections than Neon allows.
  max: 5,
  // Fail fast instead of hanging forever if Neon can't be reached (e.g. wrong
  // host, non-pooled endpoint under load, or network issue). Without this,
  // a bad connection can hang for minutes with no error surfaced to the user.
  connectionTimeoutMillis: 8000,
  idleTimeoutMillis: 10000,
});

pool.on('error', (err) => {
  console.error('Unexpected Postgres pool error', err);
});

module.exports = pool;
