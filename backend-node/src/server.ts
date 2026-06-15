import 'dotenv/config';
import express, { Express, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import pino from 'pino';
import pinoHttp from 'pino-http';

import { connectMongoDB } from '@/config/database';
import { connectRedis } from '@/config/redis';
import authRoutes from '@/routes/auth.routes';
import analyticsRoutes from '@/routes/analytics.routes';
import aiRoutes from '@/routes/ai.routes';
import { errorHandler } from '@/middleware/errorHandler';
import { authenticate } from '@/middleware/auth';

const app: Express = express();
const logger = pino();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(pinoHttp({ logger }));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Too many requests from this IP, please try again later.',
});
app.use('/api/', limiter);

// Health check
app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/analytics', authenticate, analyticsRoutes);
app.use('/api/ai', authenticate, aiRoutes);

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error handler
app.use(errorHandler);

// Initialize connections and start server
const PORT = process.env.PORT || 3001;

async function startServer() {
  try {
    await connectMongoDB();
    logger.info('Connected to MongoDB');

    await connectRedis();
    logger.info('Connected to Redis');

    app.listen(PORT, () => {
      logger.info(`Server running on port ${PORT}`);
    });
  } catch (error) {
    logger.error('Failed to start server:', error);
    process.exit(1);
  }
}

startServer();

export default app;
