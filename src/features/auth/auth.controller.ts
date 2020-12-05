import { Body, Controller, Post } from '@nestjs/common';
import { SignUpDto } from '@app/features/auth/dto/sign-up.dto';
import { SignInDto } from '@app/features/auth/dto/sign-in.dto';
import { AuthService } from '@app/features/auth/auth.service';
import { TokenModel } from '@app/features/auth/models/token.model';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {

  constructor(private authService: AuthService) {}

  @Post('signIn')
  signIn(@Body() body: SignInDto): Promise<TokenModel> {
    return this.authService.signIn(body);
  }

  @Post('signUp')
  signUp(@Body() body: SignUpDto): Promise<TokenModel> {
    return this.authService.signUp(body)
  }
}

