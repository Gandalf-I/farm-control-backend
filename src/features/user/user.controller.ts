import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { UserModel } from '@app/features/user/models/user.model';
import { UserService } from '@app/features/user/user.service';
import { UserEntity } from '@app/features/user/database/user.entity';
import { User } from '@app/shared/decorators/user.decorator';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('User')
@Controller('user')
export class UserController {

  constructor(private userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getUser(@User() user: UserEntity): Promise<UserModel> {
    return new UserModel(user);
  }

  @Get('login')
  async getUserByLogin(@Query('login') login): Promise<UserModel[]> {
    return await this.userService.getUserByLogin(login) || [];
  }

  @Get('all')
  async getAllUser(): Promise<UserModel[]> {
    return this.userService.getAllUser();
  }
}
