import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

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

// Health Check Endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    service: 'Sharmila MindCare Backend API',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
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

// Centralized 404 Handler
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: `Route not found: ${req.originalUrl}`,
  });
});

// Centralized Error Handler
app.use((err, req, res, next) => {
  console.error('Unhandled Server Error:', err);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error',
    ...(process.env.NODE_ENV !== 'production' && { stack: err.stack }),
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`[Sharmila MindCare Server] Running on http://localhost:${PORT}`);
  console.log(`[Health check available at] http://localhost:${PORT}/api/health`);
});

export default app;

