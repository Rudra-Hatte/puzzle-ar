const path = require('path');
const dotenv = require('dotenv');

dotenv.config({ path: path.resolve(__dirname, '..', '.env') });

const app = require('./src/app');
const connectToDatabase = require('./src/db');
const ensureDefaultAdmin = require('./src/seed/ensureDefaultAdmin');

const PORT = Number(process.env.PORT) || 5000;

async function startServer() {
  try {
    await connectToDatabase();
    await ensureDefaultAdmin();

    app.listen(PORT, () => {
      console.log(`API server listening on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start API server:', error.message);
    process.exit(1);
  }
}

startServer();
