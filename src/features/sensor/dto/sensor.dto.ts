import { IsString, MinLength, IsOptional } from 'class-validator';
import { Column } from 'typeorm';

export class SensorDto {

  @IsOptional()
  @IsString()
  @MinLength(3)
  name: string;

  @Column()
  lat: number;

  @Column()
  lng: number;

  @IsOptional()
  @IsString()
  workspace: string;
}
