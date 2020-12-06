import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from '@app/features/user/database/user.repository';
import { UserModel } from '@features/user/models/user.model';

@Injectable()
export class UserService {

  constructor(@InjectRepository(UserRepository)
              private usersRepository: UserRepository) {
  }

  async getAllUser(): Promise<UserModel[]> {
    return this.usersRepository.find();
  }

  async getUserByLogin(login: string): Promise<UserModel[]> {
    return this.usersRepository
      .createQueryBuilder('user')
      .where('user.login like :login', {login: `%${login}%`})
      .getMany();
  }

}
