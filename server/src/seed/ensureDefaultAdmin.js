const bcrypt = require('bcryptjs');
const AdminUser = require('../models/AdminUser');

async function ensureDefaultAdmin() {
  if (process.env.SEED_DEFAULT_ADMIN === 'false') {
    return;
  }

  const username = process.env.ADMIN_USERNAME || 'admin';
  const password = process.env.ADMIN_PASSWORD || 'admin123';

  const existingAdmin = await AdminUser.findOne({ username });

  if (existingAdmin) {
    return;
  }

  const passwordHash = await bcrypt.hash(password, 10);

  await AdminUser.create({
    username,
    passwordHash,
    role: 'admin',
  });

  console.log(`Seeded default admin account: ${username}`);
}

module.exports = ensureDefaultAdmin;
