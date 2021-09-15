import { Injectable, Inject } from '@nestjs/common';
import { User } from './interfaces/users.interface';
import { Model } from 'mongoose';
import { constants } from '../helper/constants';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject(constants.userModel) private readonly userModel: Model<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  async list(): Promise<User[]> {
    return this.userModel.find().exec();
  }
}
