import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { IsInt, IsString, IsNumber, IsNotEmpty } from 'class-validator'  //isNotEmpty que no llegue vacio
import { Expose } from 'class-transformer'

export class UpdateProductDto extends PartialType(CreateProductDto) {
    @Expose()
    @IsInt()
    @IsNotEmpty()
    id: number;

    @Expose()
    @IsString()
    @IsNotEmpty()
    product_name: string;

    @Expose()
    @IsString()
    @IsNotEmpty()
    description: string;

    @Expose()
    @IsNumber()
    @IsNotEmpty()
    price: number;
}