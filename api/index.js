// Vercel Node.js runtime can invoke an Express app directly, since an Express
// app is itself a valid (req, res) request handler.
module.exports = require('../src/app');
