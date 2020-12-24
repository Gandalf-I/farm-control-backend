import {IsString, MinLength } from 'class-validator';

export class WorkspaceDto {

  @IsString()
  @MinLength(3)
  name: string;

  usersId: number[]
}
