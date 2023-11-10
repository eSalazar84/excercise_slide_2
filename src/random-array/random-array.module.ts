import { Module } from '@nestjs/common';
import { RandomArrayController } from './random-array.controller';
import { RandomArrayService } from './random-array.service';

@Module({
  controllers: [RandomArrayController],
  providers: [RandomArrayService]
})
export class RandomArrayModule {}
