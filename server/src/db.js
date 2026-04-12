const mongoose = require('mongoose');

async function connectToDatabase() {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection;
  }

  const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/puzzle-ar';

  await mongoose.connect(uri, {
    serverSelectionTimeoutMS: 7000,
  });

  console.log('Connected to MongoDB');
  return mongoose.connection;
}

module.exports = connectToDatabase;
