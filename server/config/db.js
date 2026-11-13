import mongoose from 'mongoose';
import dns from 'dns';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// Ensure DNS resolution on Windows resolves MongoDB Atlas SRV records reliably
try {
  dns.setServers(['8.8.8.8', '8.8.4.4', '1.1.1.1']);
} catch (e) {
  // Ignore in environments where setting DNS is restricted
}

// Ensure .env is loaded regardless of execution working directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env') });
dotenv.config();

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
      dbName: 'sharmila_mindcare',
      serverSelectionTimeoutMS: 8000,
    });

    isConnected = true;
    console.log(`\n🍃 [MongoDB Connected] Host: ${conn.connection.host} | DB: ${conn.connection.name}\n`);
    return true;
  } catch (error) {
    console.error(`\n❌ [MongoDB Connection Error] Could not connect to MongoDB: ${error.message}`);
    console.warn('⚠️ Server will operate with safe local fallback buffer until MongoDB Atlas is reachable.\n');
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
