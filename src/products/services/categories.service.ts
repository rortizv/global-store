import { Injectable, NotFoundException } from '@nestjs/common';

import { Category } from '../entities/category.entity';
import { CreateCategoryDto, UpdateCategoryDto } from '../dtos/categories.dtos';

import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CategoriesService {
  private counterId = 1;
  private categories: Category[] = [
    {
      id: '37663692-c485-40bf-ab49-ba998b329bed',
      name: 'Category 1',
    },
  ];

  findAll() {
    return this.categories;
  }

  findOne(id: string) {
    const category = this.categories.find((item) => item.id === id);
    if (!category) {
      throw new NotFoundException(`Category #${id} not found`);
    }
    return category;
  }

  create(data: CreateCategoryDto) {
    const newId = uuidv4();
    const newCategory = {
      id: newId,
      ...data,
    };
    this.categories.push(newCategory);
    return newCategory;
  }

  update(id: string, changes: UpdateCategoryDto) {
    const category = this.findOne(id);
    const index = this.categories.findIndex((item) => item.id === id);
    this.categories[index] = {
      ...category,
      ...changes,
    };
    return this.categories[index];
  }

  delete(id: string) {
    const index = this.categories.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Category #${id} not found`);
    }
    this.categories.splice(index, 1);
    return true;
  }
}
