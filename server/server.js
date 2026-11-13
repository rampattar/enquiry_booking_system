import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';
import path from 'path';
import { fileURLToPath } from 'url';
import dns from 'dns';

// Fix Node.js DNS resolution on Windows for MongoDB Atlas SRV connection
try {
  dns.setServers(['8.8.8.8', '8.8.4.4', '1.1.1.1']);
} catch (e) {
  // Ignore
}

// Load environment variables reliably from server/.env or root .env
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '.env') });
dotenv.config();

import { connectDB, getDBStatus } from './config/db.js';
import enquiryRoutes from './routes/enquiryRoutes.js';
import publicRoutes from './routes/publicRoutes.js';
import dashboardRoutes from './routes/dashboardRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB Database
connectDB();

// Security & Utility Middleware
app.use(helmet());
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  credentials: true,
}));
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true, limit: '1mb' }));

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

// Rate Limiting for Public Enquiry Submission
const enquiryLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 30, // Limit each IP to 30 enquiries per windowMs
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many enquiries submitted from this IP address. Please wait 15 minutes or contact us directly via phone.',
  },
});

// Health Check Endpoint
app.get('/api/health', (req, res) => {
  const dbStatus = getDBStatus();
  res.status(200).json({
    status: 'ok',
    service: 'Sharmila MindCare Backend API',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    database: {
      connected: dbStatus.isConnected,
      host: dbStatus.host,
      name: dbStatus.dbName,
      mode: dbStatus.isConnected ? 'MongoDB Atlas Active' : 'Memory Buffered',
    },
  });
});

// Root API Endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Sharmila MindCare API',
    tagline: 'Understand Your Mind. Embrace Your Wellbeing.',
    doctor: 'Dr. Sharmila Siraj - Consultant Psychologist',
  });
});

// API Routes
app.use('/api/enquiries', enquiryLimiter, enquiryRoutes);
app.use('/api', publicRoutes);
app.use('/api/dashboard', dashboardRoutes);

// Centralized 404 Handler
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: `Route not found: ${req.originalUrl}`,
  });
});

// Centralized Error Handler
app.use((err, req, res, next) => {
  console.error('[Unhandled Server Error]:', err);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error',
    errors: err.errors || null,
    ...(process.env.NODE_ENV !== 'production' && { stack: err.stack }),
  });
});

// Start Server with Graceful Port Fallback
const defaultPort = parseInt(process.env.PORT, 10) || 5001;

function startServer(portToTry) {
  const server = app.listen(portToTry, () => {
    console.log(`\n🚀 [Sharmila MindCare Server] Running on http://localhost:${portToTry}`);
    console.log(`🩺 [Health check available at] http://localhost:${portToTry}/api/health\n`);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.warn(`⚠️ [Port in use] Port ${portToTry} is occupied. Retrying on port ${portToTry + 1}...`);
      startServer(portToTry + 1);
    } else {
      console.error('Server error:', err);
    }
  });
}

startServer(defaultPort);

export default app;
