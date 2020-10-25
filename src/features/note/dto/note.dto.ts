import { IsNumber, IsOptional, IsString, Max, MaxLength, Min } from 'class-validator';
import { NoteTypeEnum } from '@features/note/enum/note-type.enum';

export class NoteDto {

  @IsOptional()
  @IsString()
  name: string;

  @IsNumber()
  lat: number;

  @IsNumber()
  lng: number;

  @Min(NoteTypeEnum.Disease)
  @Max(NoteTypeEnum.Other)
  type: number;

  @IsString()
  @MaxLength(1000)
  comment: string;
}
