import { PartialType } from '@nestjs/swagger';
import { CultureDto } from '@features/culture/dto/culture.dto';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CultureUpdateDto extends PartialType(CultureDto) {

  @IsNumber()
  @IsNotEmpty()
  id: number;
}
