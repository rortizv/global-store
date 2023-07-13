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

@Controller('brands')
export class BrandsController {
  @Get()
  getBrands(@Query('limit') limit = 50, @Query('offset') offset = 0) {
    return {
      message: `Brands: limit => ${limit} offset => ${offset}`,
    };
  }

  @Get(':brandId')
  getBrand(@Param('brandId') brandId: string) {
    return `brandId: ${brandId}`;
  }

  @Post()
  createBrand(@Body() payload: any) {
    return {
      message: 'Create brand action',
      payload,
    };
  }

  @Put(':brandId')
  updateBrand(@Param('brandId') brandId: string, @Body() payload: any) {
    return {
      message: `Brand ${brandId} updated`,
      payload,
    };
  }

  @Delete(':brandId')
  deleteBrand(@Param('brandId') brandId: string) {
    return {
      message: `Brand ${brandId} deleted`,
    };
  }
}
