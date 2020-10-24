import { ConfigModuleOptions } from '@nestjs/config/dist/interfaces';
import { configValidator } from '@core/config/config.validator';

export const configSettings: ConfigModuleOptions = {
  validationSchema: configValidator,
  validationOptions: {
    abortEarly: true,
  },
}

