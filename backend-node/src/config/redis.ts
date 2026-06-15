import { createClient, RedisClientType } from 'redis';
import pino from 'pino';

const logger = pino();
const REDIS_URL = process.env.REDIS_URL || 'redis://localhost:6379';

let redisClient: RedisClientType;

export async function connectRedis() {
  try {
    redisClient = createClient({ url: REDIS_URL });
    await redisClient.connect();
    logger.info('Redis connected');
  } catch (error) {
    logger.error('Redis connection failed:', error);
    throw error;
  }
}

export function getRedisClient() {
  return redisClient;
}
