import { IsArray, IsDate, IsNumber, IsOptional, IsString } from 'class-validator';

export class FieldDto {

  @IsOptional()
  @IsString()
  name: string;

  area: string;

  @IsArray()
  points: string[];

  @IsOptional()
  sowingDate: string;

  @IsOptional()
  cleaningDate: string;

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
