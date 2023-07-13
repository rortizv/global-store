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

@Controller('users')
export class UsersController {
  @Get()
  getUsers(@Query('limit') limit = 50, @Query('offset') offset = 0) {
    return {
      message: `Users: limit => ${limit} offset => ${offset}`,
    };
  }

  @Get(':userId')
  getUser(@Param('userId') userId: string) {
    return `userId: ${userId}`;
  }

  @Post()
  createUser(@Body() payload: any) {
    return {
      message: 'Create user action',
      payload,
    };
  }

  @Put(':userId')
  updateUser(@Param('userId') userId: string, @Body() payload: any) {
    return {
      message: `User ${userId} updated`,
      payload,
    };
  }

  @Delete(':userId')
  deleteUser(@Param('userId') userId: string) {
    return {
      message: `User ${userId} deleted`,
    };
  }
}
