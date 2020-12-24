import { IsDate, IsString, MinLength } from 'class-validator';
import { BaseDto } from '@shared/dto/base.dto';

export class SeasonDto extends BaseDto{
  @IsString()
  @MinLength(3)
  name: string;

  @IsString()
  startDate: string;

  @IsString()
  endDate: string;
}
