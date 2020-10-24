import { IsEmail, IsString, MinLength } from 'class-validator';

export class SignUpDto {

  @IsString()
  @MinLength(6)
  login: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsEmail()
  email: string;
}
