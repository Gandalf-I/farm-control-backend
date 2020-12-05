import { IsEmpty } from 'class-validator';

export class BaseDto {

  @IsEmpty()
  createdAt: Date;

  @IsEmpty()
  updatedAt: Date;
}
