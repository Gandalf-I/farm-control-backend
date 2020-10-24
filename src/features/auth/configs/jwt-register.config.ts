import { JwtModuleAsyncOptions } from '@nestjs/jwt/dist/interfaces/jwt-module-options.interface';
import { AppConfigService } from '@core/config/config.service';
import { ConfigKeysEnum } from '@core/config/enums/config-keys.enum';

export const JWT_REGISTER: JwtModuleAsyncOptions = ({
  useFactory: (config: AppConfigService) => ({
    secret: config.get(ConfigKeysEnum.JWT_SECRET_KEY),
    signOptions: {
      expiresIn: '180d'
    },
  }),
  inject: [AppConfigService]
})
