import { IsNumber, IsString } from 'class-validator';
import { BaseDto } from '@shared/dto/base.dto';

export class CultureDto extends BaseDto{

  @IsString()
  name: string;

  @IsNumber()
  baseTemperature: number;
}
