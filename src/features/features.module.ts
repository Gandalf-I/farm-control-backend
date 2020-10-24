import { Module } from '@nestjs/common';
import { AuthModule } from '@app/features/auth/auth.module';
import { UserModule } from './user/user.module';

const FEATURES = [
  AuthModule,
  UserModule,
];

@Module({
  imports: [
    ...FEATURES,
  ],
  exports: [
    ...FEATURES
  ]
})
export class FeaturesModule {}
