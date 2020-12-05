import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { SignUpDto } from '@app/features/auth/dto/sign-up.dto';
import { SignInDto } from '@app/features/auth/dto/sign-in.dto';
import {hash, compare} from 'bcrypt'
import { TokenModel } from '@app/features/auth/models/token.model';
import { TokenContextModel } from '@app/features/auth/models/token-context.model';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from '@features/user/database/user.repository';
import { UserService } from '@features/user/user.service';

@Injectable()
export class AuthService {

  constructor(private jwtService: JwtService,
              @InjectRepository(UserRepository)
              private usersRepository: UserRepository,
              private userService: UserService,
              ) {
  }

  async signUp(body: SignUpDto): Promise<TokenModel> {
    const user = await this.usersRepository.findOne({
      email: body.email
    });

    if (user) {
      throw new HttpException(
        'User with such email is already exist!',
        HttpStatus.CONFLICT
      );
    }

    const newUser = await this.usersRepository.insertAndReturnOne({
      ...body,
      password: await hash(body.password, 10),
    });

    return new TokenModel(await this.jwtService.signAsync({
      ...new TokenContextModel(newUser.id)
    }));
  }

  async signIn(body: SignInDto): Promise<TokenModel> {
    const user = await this.usersRepository.findOne({
      email: body.email
    });

    if (!user) {
      throw new HttpException(
        'User with such email is not found!',
        HttpStatus.UNAUTHORIZED
      );
    }

    if (!(await compare(body.password, user.password))) {
      throw new HttpException(
        'User password is incorrect!',
        HttpStatus.UNAUTHORIZED
      );
    }

    return new TokenModel(await this.jwtService.signAsync({
      ...new TokenContextModel(user.id)
    }));
  }
}
