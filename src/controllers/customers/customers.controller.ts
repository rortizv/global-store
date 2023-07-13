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

@Controller('customers')
export class CustomersController {
  @Get()
  getCustomers(@Query('limit') limit = 50, @Query('offset') offset = 0) {
    return {
      message: `Customers: limit => ${limit} offset => ${offset}`,
    };
  }

  @Get(':customerId')
  getCustomer(@Param('customerId') customerId: string) {
    return `orderId: ${customerId}`;
  }

  @Post()
  createCustomer(@Body() payload: any) {
    return {
      message: 'Create customer action',
      payload,
    };
  }

  @Put(':orderId')
  updateCustomer(
    @Param('customerId') customerId: string,
    @Body() payload: any,
  ) {
    return {
      message: `Customer ${customerId} updated`,
      payload,
    };
  }

  @Delete(':customerId')
  deleteCustomer(@Param('customerId') customerId: string) {
    return {
      message: `Customer ${customerId} deleted`,
    };
  }
}
