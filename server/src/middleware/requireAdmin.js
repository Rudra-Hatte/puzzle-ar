const jwt = require('jsonwebtoken');

function requireAdmin(req, res, next) {
  const authHeader = req.headers.authorization || '';

  if (!authHeader.startsWith('Bearer ')) {
    res.status(401).json({ message: 'Missing bearer token' });
    return;
  }

  const token = authHeader.slice(7).trim();

  try {
    const secret = process.env.JWT_SECRET || 'dev-secret-change-me';
    const payload = jwt.verify(token, secret);

    if (payload.role !== 'admin') {
      res.status(403).json({ message: 'Forbidden' });
      return;
    }

    req.user = payload;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid or expired token' });
  }
}

module.exports = requireAdmin;
