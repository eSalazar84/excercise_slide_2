import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

const URL_product = 'http://localhost:3011/products'

@Injectable()
export class ProductService {
  async create(createProductDto: CreateProductDto): Promise<Product> {
    const newProduct = { ...createProductDto };
    const res = await fetch(URL_product, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newProduct)
    })
    const parsed = await res.json()
    return parsed;
  }

  async findAll(): Promise<Product[]> {
    const res = await fetch(URL_product);
    const parsed = await res.json();
    return parsed;
  }

  async findOne(id: number): Promise<Product> {
    const res = await fetch(URL_product);
    const parsedProduct = await res.json();
    const productId = parsedProduct.filter((product: Product) => product.id === id)
    if (!productId.length) throw new NotFoundException(`No hay ${id} en stock`)
    return productId;
  }

  async update(id: number, updateProductDto: UpdateProductDto): Promise<Product> {
    try {
      const isProduct = await this.findOne(id);
      //Object.keys verifica si isProduct viene con datos, y si no, se detiene ahi.
      if (!Object.keys(isProduct).length) return;
      const updateProduct = { ...updateProductDto, id };
      const res = await fetch(URL_product + id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateProduct)
      });
      const parsed = await res.json();
      return parsed;
    } catch (err) {
      throw new Error(err)
    }

  }

  async remove(id: number): Promise<Product> {
    const res = await fetch(URL_product + id, {
      method: 'DELETE',
    });
    if (!res.ok) {
      throw new Error('Failed to delete');
    }
    const parsed = await res.json();
    return parsed;
  }
}
