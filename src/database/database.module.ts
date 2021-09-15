import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { databaseProviders } from './database.provider';
import databaseConfig from '../config/database.config';

@Module({
  imports: [ConfigModule.forFeature(databaseConfig)],
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
