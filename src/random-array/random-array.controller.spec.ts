import { Test, TestingModule } from '@nestjs/testing';
import { RandomArrayController } from './random-array.controller';

describe('RandomArrayController', () => {
  let controller: RandomArrayController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RandomArrayController],
    }).compile();

    controller = module.get<RandomArrayController>(RandomArrayController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
