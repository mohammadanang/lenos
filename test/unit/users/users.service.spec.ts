import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseModule } from '../../../src/database/database.module';
import { userProviders } from '../../../src/users/users.provider';
import { UsersService } from '../../../src/users/users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule],
      providers: [UsersService, ...userProviders],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
