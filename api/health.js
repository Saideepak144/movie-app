const { getPool } = require('./lib/db');

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  try {
    const pool = getPool();
    await pool.query('SELECT 1');
    res.status(200).json({ status: 'ok', db: 'connected' });
  } catch (error) {
    console.error('Health check error:', error);
    res.status(500).json({
      status: 'error',
      db: 'disconnected',
      hint: 'Check AIVEN_SETUP.md - allow 0.0.0.0/0 in Aiven IP allowlist'
    });
  }
};
