import { Module } from '@nestjs/common';
import { CoreModule } from '@core/core.module';
import { FeaturesModule } from '@app/features/features.module';

@Module({
  imports: [
    CoreModule,
    FeaturesModule
  ],
})
export class AppModule {}
