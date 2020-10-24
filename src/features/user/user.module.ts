import { Global, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from '@features/user/database/user.repository';
import { UserController } from './user.controller';

@Global()
@Module({
  providers: [
    UserService
  ],
  imports: [
    TypeOrmModule.forFeature([UserRepository]),
  ],
  exports: [
    UserService,
    TypeOrmModule
  ],
  controllers: [
    UserController
  ]
})
export class UserModule {}
