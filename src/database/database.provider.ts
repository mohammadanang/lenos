import * as mongoose from 'mongoose';
import { ConfigService } from '@nestjs/config';
import { Database } from '../config/config.interface';
import { constants } from '../helper/constants';

export const databaseProviders = [
  {
    provide: constants.databaseConnection,
    useFactory: async (
      configService: ConfigService,
    ): Promise<typeof mongoose> => {
      const dbConfig = configService.get<Database>('database');
      const connection = await mongoose.connect(dbConfig.dbHost, {
        useNewUrlParser: true,
        useFindAndModify: false,
      });

      return connection;
    },
    inject: [ConfigService],
  },
];
