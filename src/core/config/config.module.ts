import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppConfigService } from '@core/config/config.service';
import { configSettings } from '@core/config/config.setting';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot(configSettings),
  ],
  providers: [
    AppConfigService
  ],
  exports: [
    AppConfigService
  ]
})
export class AppConfigModule {}
