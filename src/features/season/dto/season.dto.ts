import { IsDate, IsString, MinLength } from 'class-validator';

export class SeasonDto {
  @IsString()
  @MinLength(3)
  name: string;

  @IsDate()
  startDate: Date;

  @IsDate()
  endDate: Date;
}
