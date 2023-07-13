import {
  Controller,
  Get,
  Param,
  Post,
  Query,
  Body,
  Put,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { AppService } from 'src/app.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getProducts(
    @Query('limit') limit = 50,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return {
      message: `Products: limit => ${limit} offset => ${offset} brand => ${brand}`,
    };
  }

  @Get(':productId')
  @HttpCode(200)
  getProduct(@Param('productId') productId: string) {
    return {
      message: `ProductId: ${productId}`,
    };
  }

  @Post()
  createProduct(@Body() payload: any) {
    return {
      message: 'Create action',
      payload,
    };
  }

  @Put(':productId')
  updateProduct(@Param('productId') productId: string, @Body() payload: any) {
    return {
      message: `Product ${productId} updated`,
      payload,
    };
  }

  @Delete(':productId')
  deleteProduct(@Param('productId') productId: string) {
    return {
      message: `Product ${productId} deleted`,
    };
  }
}
