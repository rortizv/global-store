import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesController } from './controllers/categories/categories.controller';
import { ProductsController } from './controllers/products/products.controller';
import { OrdersController } from './controllers/orders/orders.controller';
import { UsersController } from './controllers/users/users.controller';
import { CustomersController } from './controllers/customers/customers.controller';
import { BrandsController } from './controllers/brands/brands.controller';

@Module({
  imports: [],
  controllers: [AppController, CategoriesController, ProductsController, OrdersController, UsersController, CustomersController, BrandsController],
  providers: [AppService],
})
export class AppModule {}
