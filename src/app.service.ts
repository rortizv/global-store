import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  products = [];
  constructor() {
    this.products = [
      {
        id: 1,
        name: 'iPhone X',
        price: 500,
      },
      {
        id: 2,
        name: 'iPhone 11',
        price: 600,
      },
    ];
  }

  getProducts(): any {
    return this.products;
  }

  getName(): string {
    return 'iPhone 12';
  }
}
