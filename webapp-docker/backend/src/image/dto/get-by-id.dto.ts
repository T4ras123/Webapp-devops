import { ToNumber } from '../../utils/decorators/ToNumber';
import { IsNumber, IsOptional } from 'class-validator';

export class GetByIdDto {
  @ToNumber()
  @IsNumber()
  @IsOptional()
  id: number;
}
