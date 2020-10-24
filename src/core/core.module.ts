import { Global, Module } from '@nestjs/common';
import { ServicesModule } from '@core/services/services.module';
import { AppConfigModule } from '@core/config/config.module';
import { DatabaseModule } from './database/database.module';

@Global()
@Module({
  imports: [
    ServicesModule,
    AppConfigModule,
    DatabaseModule,
  ],
  exports: [
    ServicesModule,
    AppConfigModule
  ]
})
export class CoreModule {

}
