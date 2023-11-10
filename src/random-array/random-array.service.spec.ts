import { Test, TestingModule } from '@nestjs/testing';
import { RandomArrayService } from './random-array.service';

describe('RandomArrayService', () => {
  let service: RandomArrayService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RandomArrayService],
    }).compile();

    service = module.get<RandomArrayService>(RandomArrayService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
