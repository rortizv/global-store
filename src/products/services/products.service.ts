import { Injectable, NotFoundException } from '@nestjs/common';
import {
  CreateProductDto,
  UpdateProductDto,
} from 'src/products/dtos/products.dtos';

import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ProductsService {
  private products: CreateProductDto[] = [
    {
      id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
      name: 'iPhone X',
      price: 500,
      stock: 10,
      image: 'https://picsum.photos/200/300',
      state: true,
    },
    {
      id: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed',
      name: 'iPhone 11',
      price: 600,
      stock: 23,
      image: 'https://picsum.photos/300/301',
      state: true,
    },
  ];

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  getAllProducts(limit, offset): any {
    console.log(limit, offset);
    return this.products;
  }

  getProductById(id: string): any {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }

  createProduct(payload: CreateProductDto): any {
    const newProduct = {
      id: uuidv4(),
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  updateProductById(id: string, updatedProduct: UpdateProductDto): any {
    const product = this.getProductById(id);
    if (product) {
      const index = this.products.findIndex((product) => product.id === id);
      this.products[index] = {
        ...product,
        ...updatedProduct,
      };
      return updatedProduct;
    }
  }

  deleteProductById(id: string): any {
    const product = this.getProductById(id);
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    const index = this.products.findIndex((product) => product.id === id);
    this.products[index].state = false;
    return this.products[index];
  }
}
