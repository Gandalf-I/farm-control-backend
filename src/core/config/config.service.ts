import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config'
import { ConfigKeysEnum } from '@core/config/enums/config-keys.enum';

@Injectable()
export class AppConfigService extends ConfigService {

  constructor() {
    super();
  }

  public get<T>(key: ConfigKeysEnum): T {
    return super.get(key);
  }
}
