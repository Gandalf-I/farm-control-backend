import { Module } from '@nestjs/common';
import { AuthModule } from '@app/features/auth/auth.module';
import { UserModule } from './user/user.module';
import { CultureModule } from './culture/culture.module';
import { FieldModule } from './field/field.module';
import { NoteModule } from './note/note.module';
import { WorkspaceModule } from './workspace/workspace.module';
import { MeasurementModule } from './measurement/measurement.module';

const FEATURES = [
  AuthModule,
  UserModule,
];

@Module({
  imports: [
    ...FEATURES,
    CultureModule,
    FieldModule,
    NoteModule,
    WorkspaceModule,
    MeasurementModule,
  ],
  exports: [
    ...FEATURES
  ]
})
export class FeaturesModule {}
