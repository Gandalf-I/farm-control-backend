import { IsNumber, IsString } from 'class-validator';

export class CultureDto {
  @IsString()
  name: string;

  @IsNumber()
  baseTemperature: number;
}
