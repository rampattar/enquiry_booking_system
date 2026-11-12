import mongoose from 'mongoose';

let isConnected = false;

export const connectDB = async () => {
  if (isConnected) {
    return true;
  }

  const mongoURI = process.env.MONGODB_URI;

  if (!mongoURI) {
    console.warn('\n⚠️ [Database Notice] MONGODB_URI is not set in server/.env.');
    console.warn('ℹ️ Running in memory-buffered mode. Please provide a MongoDB Atlas URI in server/.env for permanent persistence.\n');
    return false;
  }

  try {
    const conn = await mongoose.connect(mongoURI, {
      serverSelectionTimeoutMS: 5000, // Timeout fast if URI is unreachable
    });

    isConnected = true;
    console.log(`\n🍃 [MongoDB Connected] Host: ${conn.connection.host} | DB: ${conn.connection.name}\n`);
    return true;
  } catch (error) {
    console.error(`\n❌ [MongoDB Connection Error] Could not connect to: ${mongoURI}`);
    console.error(`Reason: ${error.message}`);
    console.warn('⚠️ Server will continue operating with safe local fallback until MongoDB Atlas is reachable.\n');
    return false;
  }
};

export const getDBStatus = () => ({
  isConnected: mongoose.connection.readyState === 1,
  readyState: mongoose.connection.readyState,
  host: mongoose.connection.host || null,
  dbName: mongoose.connection.name || null,
});

export default connectDB;
