import {
  IsString,
  IsUrl,
  IsBoolean,
  IsNotEmpty,
  IsEmail,
  IsStrongPassword,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateUserDto {
  public id?: string;
  @IsNotEmpty()
  @IsString()
  readonly fullName: string;
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;
  @IsNotEmpty()
  @IsString()
  @IsStrongPassword()
  readonly password: string;
  @IsNotEmpty()
  @IsUrl()
  readonly image: string;
  @IsNotEmpty()
  @IsBoolean()
  public state: boolean;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
