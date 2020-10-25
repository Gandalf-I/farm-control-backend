import { IsDate, IsNumber, IsString, Max, Min } from 'class-validator';

export class MeasurementDto {

  @IsDate()
  time: Date;

  @Min(0)
  @Min(0)
  illumination: number;

  @IsNumber()
  airTemp: number;

  @Min(0)
  @Max(100)
  airCarbon: number;

  @Min(0)
  @Max(100)
  airHumidity: number;

  @IsNumber()
  soilTemp: number;

  @Min(0)
  @Max(100)
  soilHumidity: number;

  @IsString()
  sensor: string;
}
