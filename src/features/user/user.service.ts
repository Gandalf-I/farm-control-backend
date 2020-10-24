import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from '@app/features/user/database/user.repository';

@Injectable()
export class UserService {

  constructor(@InjectRepository(UserRepository)
              private usersRepository: UserRepository) {
  }

}
