import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get()
  getCategories(@Query('limit') limit = 10, @Query('offset') offset = 0) {
    return {
      message: `Categories: limit => ${limit} offset => ${offset}`,
    };
  }

  @Get(':categoryId/products/:productId')
  getCategory(
    @Param('productId') productId: string,
    @Param('categoryId') categoryId: string,
  ) {
    return `Product with id ${productId} belongs to category with id ${categoryId}`;
  }

  @Post()
  createCategory(@Body() payload: any) {
    return {
      message: 'Category created succesfully',
      payload,
    };
  }

  @Put(':categoryId')
  updateCategory(
    @Param('categoryId') categoryId: string,
    @Body() payload: any,
  ) {
    return {
      message: `Category ${categoryId} updated`,
      payload,
    };
  }

  @Delete(':categoryId')
  deleteCategory(@Param('categoryId') categoryId: string) {
    return {
      message: `Brand ${categoryId} deleted`,
    };
  }
}
