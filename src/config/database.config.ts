import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  dbHost: process.env.DB_HOST,
}));
