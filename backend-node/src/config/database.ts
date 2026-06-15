import mongoose from 'mongoose';
import pino from 'pino';

const logger = pino();
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/fintech';

export async function connectMongoDB() {
  try {
    await mongoose.connect(MONGODB_URI);
    logger.info('MongoDB connected');
  } catch (error) {
    logger.error('MongoDB connection failed:', error);
    throw error;
  }
}

export default mongoose;
