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
  BadRequestException,
} from '@nestjs/common';
import { ProductsService } from 'src/services/products/products.service';
import { CreateProductDto, UpdateProductDto } from 'src/dtos/products.dtos';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Get()
  getProducts(@Query('limit') limit = 50, @Query('offset') offset = 0) {
    const products = this.productService.getAllProducts(limit, offset);
    const count = products.length;
    if (products) {
      return {
        count,
        products,
      };
    } else {
      return {
        status: 500,
        message: 'Error getting products',
      };
    }
  }

  @Get(':productId')
  @HttpCode(200)
  getProduct(@Param('productId') productId: string) {
    const product = this.productService.getProductById(productId);
    if (product) {
      return {
        product,
      };
    } else {
      return {
        status: 404,
        message: 'Product not found',
      };
    }
  }

  @Post()
  createProduct(@Body() payload: CreateProductDto) {
    const product = this.productService.createProduct(payload);
    if (!product) {
      throw new BadRequestException('Error creating product');
    }
    return {
      message: 'Product created succesfully',
      product,
    };
  }

  @Put(':productId')
  updateProduct(
    @Param('productId') productId: string,
    @Body() payload: UpdateProductDto,
  ) {
    this.productService.updateProductById(productId, payload);
    return {
      message: `Product ${productId} updated succesfully`,
      payload,
    };
  }

  @Delete(':productId')
  deleteProduct(@Param('productId') productId: string) {
    const products = this.productService.deleteProductById(productId);
    return {
      message: `Product ${productId} deleted succesfully (logically - state: false)`,
      products,
    };
  }
}
