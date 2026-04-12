const express = require('express');
const jwt = require('jsonwebtoken');

const AdminUser = require('../models/AdminUser');
const requireAdmin = require('../middleware/requireAdmin');

const router = express.Router();

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      res.status(400).json({ message: 'Username and password are required' });
      return;
    }

    const user = await AdminUser.findOne({ username: String(username).trim() });

    if (!user) {
      res.status(401).json({ message: 'Invalid credentials' });
      return;
    }

    const isValid = await user.verifyPassword(password);

    if (!isValid) {
      res.status(401).json({ message: 'Invalid credentials' });
      return;
    }

    const secret = process.env.JWT_SECRET || 'dev-secret-change-me';
    const expiresIn = process.env.JWT_EXPIRES_IN || '12h';

    const token = jwt.sign(
      {
        sub: user._id,
        username: user.username,
        role: user.role,
      },
      secret,
      { expiresIn }
    );

    res.json({
      token,
      user: {
        id: user._id,
        username: user.username,
        role: user.role,
      },
    });
  } catch (error) {
    console.error('Login failed:', error);
    res.status(500).json({ message: 'Login failed' });
  }
});

router.get('/me', requireAdmin, async (req, res) => {
  res.json({
    user: {
      id: req.user.sub,
      username: req.user.username,
      role: req.user.role,
    },
  });
});

module.exports = router;
