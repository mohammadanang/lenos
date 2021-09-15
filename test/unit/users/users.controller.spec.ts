import { Test, TestingModule } from '@nestjs/testing';
import { userProviders } from '../../../src/users/users.provider';
import { UsersController } from '../../../src/users/users.controller';
import { UsersService } from '../../../src/users/users.service';
import { DatabaseModule } from '../../../src/database/database.module';

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule],
      controllers: [UsersController],
      providers: [UsersService, ...userProviders],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
