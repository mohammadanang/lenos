import { Mongoose } from 'mongoose';
import { UserSchema } from './schemas/user.schema';
import { constants } from '../helper/constants';

export const userProviders = [
  {
    provide: constants.userModel,
    useFactory: (mongoose: Mongoose) => mongoose.model('User', UserSchema),
    inject: [constants.databaseConnection],
  },
];
