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

@Controller('orders')
export class OrdersController {
  @Get()
  getOrders(@Query('limit') limit = 50, @Query('offset') offset = 0) {
    return {
      message: `Orders: limit => ${limit} offset => ${offset}`,
    };
  }

  @Get(':orderId')
  getOrder(@Param('orderId') orderId: string) {
    return `orderId: ${orderId}`;
  }

  @Post()
  createOrder(@Body() payload: any) {
    return {
      message: 'Create order action',
      payload,
    };
  }

  @Put(':orderId')
  updateOrder(@Param('orderId') orderId: string, @Body() payload: any) {
    return {
      message: `Order ${orderId} updated`,
      payload,
    };
  }

  @Delete(':orderId')
  deleteOrder(@Param('orderId') orderId: string) {
    return {
      message: `Order ${orderId} deleted`,
    };
  }
}
