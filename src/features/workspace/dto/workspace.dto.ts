import { IsNumber, IsString, MinLength, ValidateNested } from 'class-validator';

export class WorkspaceDto {

  @IsString()
  @MinLength(3)
  name: string;

  usersId: number[]
}
