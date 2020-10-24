import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '@app/features/auth/guards/jwt-auth.guard';
import { UserModel } from '@app/features/user/models/user.model';
import { UserService } from '@app/features/user/user.service';
import { UserEntity } from '@app/features/user/database/user.entity';
import { User } from '@app/shared/decorators/user.decorator';

@UseGuards(JwtAuthGuard)
@Controller('user')
export class UserController {

  constructor(private userService: UserService) {}

  @Get()
  getUser(@User() user: UserEntity): UserModel {
    return new UserModel(user);
  }
}
