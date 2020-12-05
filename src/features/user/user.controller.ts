import { Controller, Get, UseGuards } from '@nestjs/common';
import { UserModel } from '@app/features/user/models/user.model';
import { UserService } from '@app/features/user/user.service';
import { UserEntity } from '@app/features/user/database/user.entity';
import { User } from '@app/shared/decorators/user.decorator';
import { JwtAuthGuard } from '@features/auth/guards/jwt-auth.guard';
import { ApiTags } from '@nestjs/swagger';

// @UseGuards(JwtAuthGuard)
@ApiTags('User')
@Controller('user')
export class UserController {

  constructor(private userService: UserService) {}

  @Get()
  async getUser(@User() user: UserEntity): Promise<UserModel> {
    return new UserModel(user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('all')
  async getAllUser(): Promise<UserModel[]> {
    return this.userService.getAllUser();
  }
}
