import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ToNumber } from '../../utils/decorators/ToNumber';

export class CreateImageDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @ToNumber()
  @IsNumber()
  price: number;
}
