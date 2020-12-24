import { IsEnum, IsNumber, IsOptional, IsString, MaxLength } from 'class-validator';
import { NoteTypeEnum } from '@features/note/enum/note-type.enum';

export class NoteDto {

  @IsOptional()
  @IsString()
  name: string;

  @IsNumber()
  lat: number;

  @IsNumber()
  lng: string;

  @IsOptional()
  @IsEnum(NoteTypeEnum)
  type: string;

  @IsOptional()
  @IsString()
  @MaxLength(1000)
  comment: string;
}
