import { Global, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { JWT_REGISTER } from '@app/features/auth/configs/jwt-register.config';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from '@app/features/auth/strategies/jwt.strategy';

@Global()
@Module({
  providers: [
    AuthService,
    JwtStrategy
  ],
  imports: [
    PassportModule,
    JwtModule.registerAsync(JWT_REGISTER),
  ],
  controllers: [
    AuthController
  ],
  exports: [
    AuthService
  ]
})
export class AuthModule {}
