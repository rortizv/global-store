import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getProducts(): string {
    return this.appService.getProducts();
  }

  @Get('/name')
  getName(): string {
    return this.appService.getName();
  }
}
