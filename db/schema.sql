-- AUTOFLOW platform schema (PostgreSQL / Neon)

CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE IF NOT EXISTS members (
  id                      UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name                    TEXT NOT NULL,
  serial_number           CHAR(4) NOT NULL UNIQUE,
  role                    TEXT NOT NULL CHECK (role IN ('admin', 'marketing')),
  commission_percentage   NUMERIC(5,2) NOT NULL DEFAULT 0,
  contact                 TEXT,
  created_at              DATE NOT NULL DEFAULT CURRENT_DATE
);

CREATE TABLE IF NOT EXISTS deals (
  id                      UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  member_id               UUID NOT NULL REFERENCES members(id) ON DELETE CASCADE,
  project_name            TEXT NOT NULL,
  amount_from_client      NUMERIC(12,2) NOT NULL CHECK (amount_from_client >= 0),
  commission_percentage   NUMERIC(5,2) NOT NULL CHECK (commission_percentage >= 0),
  commission_amount       NUMERIC(12,2) NOT NULL,
  deal_date                    DATE NOT NULL DEFAULT CURRENT_DATE,
  created_at              TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_deals_member ON deals(member_id);

-- Tracks failed login attempts per client IP, used for temporary lockouts
-- against serial brute-forcing (4-digit serials only have 10,000 combos).
CREATE TABLE IF NOT EXISTS login_attempts (
  client_key    TEXT PRIMARY KEY,
  fail_count    INTEGER NOT NULL DEFAULT 0,
  locked_until  TIMESTAMPTZ,
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);
