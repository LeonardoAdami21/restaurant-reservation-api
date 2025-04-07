export const appPort = process.env.APP_PORT || 3000;
export const nodeEnv = process.env.NODE_ENV || 'development';

export const mongoDbUrl =
  process.env.MONGO_URI ||
  'mongodb://localhost:27017/your-database-name';