import { IsDate, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';
import { OneToOne } from 'typeorm';
import { WorkspaceEntity } from '@features/workspace/database/workspace.entity';

export class FieldDto {

  @IsString()
  name: string;

  @IsNumber()
  area: number;

  @IsOptional()
  @OneToOne(() => WorkspaceEntity)
  culture: number;

  @ValidateNested()
  lat: number[];

  @ValidateNested()
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
}
