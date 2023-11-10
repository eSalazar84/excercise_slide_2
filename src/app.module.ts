import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RandomArrayModule } from './random-array/random-array.module';

@Module({
  imports: [RandomArrayModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
