import { Injectable, NotFoundException } from '@nestjs/common';

import { Brand } from '../entities/brand.entity';
import { CreateBrandDto, UpdateBrandDto } from '../dtos/brands.dtos';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class BrandsService {
  private counterId = 1;
  private brands: Brand[] = [
    {
      id: 'e64a3328-e6d0-48a6-97a1-9ce1b31966ad',
      name: 'Brand 1',
      image: 'https://i.imgur.com/U4iGx1j.jpeg',
    },
  ];

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const product = this.brands.find((item) => item.id === id);
    if (!product) {
      throw new NotFoundException(`Brand #${id} not found`);
    }
    return product;
  }

  create(data: CreateBrandDto) {
    const newId = uuidv4();
    const newBrand = {
      id: newId,
      ...data,
    };
    this.brands.push(newBrand);
    return newBrand;
  }

  update(id: string, changes: UpdateBrandDto) {
    const brand = this.findOne(id);
    const index = this.brands.findIndex((item) => item.id === id);
    this.brands[index] = {
      ...brand,
      ...changes,
    };
    return this.brands[index];
  }

  delete(id: string) {
    const index = this.brands.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Brand #${id} not found`);
    }
    this.brands.splice(index, 1);
    return true;
  }
}
