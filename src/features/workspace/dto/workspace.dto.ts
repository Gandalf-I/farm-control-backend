import { IsNumber, IsString, MinLength } from 'class-validator';

export class WorkspaceDto {

  @IsString()
  @MinLength(6)
  name: string;

  @IsNumber()
  creatorId: number;
}
