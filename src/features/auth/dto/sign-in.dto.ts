import { IsString, MinLength } from 'class-validator';

export class SignInDto {

  @IsString()
  @MinLength(6)
  login: string;

  @IsString()
  @MinLength(6)
  password: string;
}
