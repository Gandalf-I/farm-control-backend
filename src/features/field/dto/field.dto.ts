import { IsArray, IsDate, IsNumber, IsOptional, IsString } from 'class-validator';

export class FieldDto {

  @IsOptional()
  @IsString()
  name: string;

  @IsNumber()
  area: number;

  @IsArray()
  @IsNumber({},{each: true})
  lat: number[];

  @IsArray()
  @IsNumber({},{each: true})
  lng: number[];

  @IsOptional()
  @IsDate()
  sowingDate: Date;

  @IsOptional()
  @IsDate()
  cleaningDate: Date;

  @IsOptional()
  @IsNumber()
  averageYield: number;

  @IsOptional()
  @IsNumber()
  tempeAcc: number;

  @IsOptional()
  @IsNumber()
  moistureAcc: number;

  @IsOptional()
  cultureId: number

  @IsOptional()
  workspaceId: number;
}
