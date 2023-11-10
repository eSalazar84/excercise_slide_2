import { Controller, Get, Param } from '@nestjs/common';
import { RandomArrayService } from './random-array.service';

@Controller('random-array')
export class RandomArrayController {
    constructor(private readonly RandomArrayService) {}

    
}
