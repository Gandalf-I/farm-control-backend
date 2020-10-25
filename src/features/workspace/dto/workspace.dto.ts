import { IsString, MinLength } from 'class-validator';

export class WorkspaceDto {

  @IsString()
  @MinLength(6)
  name: string;

  @IsString()
  @MinLength(6)
  userLogin: string;
}
