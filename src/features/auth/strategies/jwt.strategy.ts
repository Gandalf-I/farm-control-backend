import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { AppConfigService } from '@core/config/config.service';
import { ConfigKeysEnum } from '@core/config/enums/config-keys.enum';
import { TokenContextModel } from '@app/features/auth/models/token-context.model';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from '@features/user/database/user.repository';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

  constructor(private config: AppConfigService,
              @InjectRepository(UserRepository)
              private usersRepository: UserRepository) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: config.get(ConfigKeysEnum.JWT_SECRET_KEY),
    });
  }

  async validate(payload: TokenContextModel) {
    return this.usersRepository.findOne(payload.id);
  }
}
