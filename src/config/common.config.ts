import { registerAs } from '@nestjs/config';

export default registerAs('common', () => ({
  nodeEnv: process.env.NODE_ENV,
  port: parseInt(process.env.PORT, 10),
}));
