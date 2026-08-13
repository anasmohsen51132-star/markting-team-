require('dotenv').config();
const path = require('path');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const authRoutes = require('./routes/auth');
const memberRoutes = require('./routes/members');
const dealRoutes = require('./routes/deals');

const app = express();

app.use(express.json());
app.use(cookieParser());

// CORS is only relevant if the frontend is ever hosted on a *different* origin
// than the API (e.g. two separate Vercel projects). When both are served from
// the same Vercel project (the default setup here), this is a no-op.
const allowedOrigins = (process.env.ALLOWED_ORIGINS || '')
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean);

if (allowedOrigins.length > 0) {
  app.use(cors({ origin: allowedOrigins, credentials: true }));
}

app.use('/api/auth', authRoutes);
app.use('/api/members', memberRoutes);
app.use('/api/deals', dealRoutes);

app.get('/api/health', (req, res) => res.json({ ok: true, time: new Date().toISOString() }));

// Serve the frontend (used for local `npm run dev`; on Vercel the /public
// folder is already served as static assets by the platform itself).
app.use(express.static(path.join(__dirname, '..', 'public')));
app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api/')) return next();
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

// Central error handler — keeps error details out of API responses.
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'server_error' });
});

module.exports = app;
