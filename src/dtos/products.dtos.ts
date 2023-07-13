import {
  IsString,
  IsNumber,
  IsUrl,
  IsBoolean,
  IsNotEmpty,
  IsPositive,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateProductDto {
  public id?: string;
  @IsNotEmpty()
  @IsString()
  readonly name: string;
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  readonly price: number;
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  readonly stock: number;
  @IsNotEmpty()
  @IsUrl()
  readonly image: string;
  @IsNotEmpty()
  @IsBoolean()
  public state: boolean;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}
