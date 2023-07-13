import { Injectable, NotFoundException } from '@nestjs/common';

import { Product } from './../entities/product.entity';
import { CreateProductDto, UpdateProductDto } from './../dtos/products.dtos';

import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ProductsService {
  private counterId = 1;
  private products: Product[] = [
    {
      id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
      name: 'iPhone X',
      price: 500,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      stock: 10,
      image: 'https://picsum.photos/200/300',
    },
    {
      id: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed',
      name: 'iPhone 11',
      price: 600,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      stock: 23,
      image: 'https://picsum.photos/300/301',
    },
  ];

  findAll(limit, offset, brand) {
    console.log(limit, offset, brand);
    return {
      count: this.products.length,
      products: this.products,
    };
  }

  findOne(id: string) {
    const product = this.products.find((item) => item.id === id);
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }

  create(data: CreateProductDto) {
    const newId = uuidv4();
    const newProduct: any = {
      id: newId,
      ...data,
    };
    this.products.push(newProduct);
    return {
      message: 'Product created succesfully',
      newProduct,
    };
  }

  update(id: string, changes: UpdateProductDto) {
    const product = this.findOne(id);
    const index = this.products.findIndex((item) => item.id === id);
    this.products[index] = {
      ...product,
      ...changes,
    };
    return {
      message: 'Product updated succesfully',
      product: this.products[index],
    };
  }

  delete(id: string) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    this.products.splice(index, 1);
    return {
      message: `Product #${id} deleted succesfully`,
    };
  }
}
