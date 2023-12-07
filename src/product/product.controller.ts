import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, BadRequestException, HttpStatus, ParseIntPipe, NotFoundException } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) { }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(@Body() createProductDto: CreateProductDto): Promise<CreateProductDto> {
    try {
      const serviceRes = await this.productService.create(createProductDto)
      return serviceRes
    } catch (err) {
      throw new BadRequestException('product creation failed')
    }
  }

  @Get()
  async findAll() {
    const serviceRes = await this.productService.findAll()
    return serviceRes;
  }

  @Get(':id')
  async findOne(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number): Promise<UpdateProductDto> {
    try {
      const serviceRes = await this.productService.findOne(+id)
      if (Object.keys(serviceRes).length) {
        return serviceRes
      }
    } catch (err) {
      throw new NotFoundException(`Cannot get inventory with id ${id}`);
    }
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async update(@Param('id') id: string, @Body() updatedProductDto: UpdateProductDto): Promise<UpdateProductDto> {
    return this.productService.update(+id, updatedProductDto)
  }


  @Delete(':id')
  remove(@Param('id') id: string): Promise<UpdateProductDto> {
    return this.productService.remove(+id);
  }

}
