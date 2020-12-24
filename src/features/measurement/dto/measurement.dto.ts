import { IsDate, IsNumber, IsOptional, Max, Min } from 'class-validator';
import { SensorEntity } from '@features/sensor/database/sensor.entity';

export class MeasurementDto {

  @IsOptional()
  @IsDate()
  time: Date;

  @IsOptional()
  @Min(0)
  illumination: number;

  @IsOptional()
  @IsNumber()
  airTemp: number;

  @IsOptional()
  @Min(0)
  @Max(100)
  airCarbon: number;

  @IsOptional()
  @Min(0)
  @Max(100)
  airHumidity: number;

  @IsOptional()
  @IsNumber()
  soilTemp: number;

  @IsOptional()
  @Min(0)
  @Max(100)
  soilHumidity: number;

  sensor: SensorEntity;
}
