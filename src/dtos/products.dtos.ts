export class CreateProductDto {
  public id?: string;
  readonly name: string;
  readonly price: number;
  readonly stock: number;
  readonly image: string;
  readonly state: boolean;
}

export class UpdateProductDto {
  readonly name?: string;
  readonly price?: number;
  readonly stock?: number;
  readonly image?: string;
  readonly state?: boolean;
}
