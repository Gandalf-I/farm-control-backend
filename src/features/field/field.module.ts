import { Module } from '@nestjs/common';
import { FieldService } from './field.service';
import { FieldController } from './field.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FieldRepository } from '@features/field/database/field.repository';

@Module({
  providers: [
    FieldService
  ],
  controllers: [
    FieldController
  ],
  imports: [
    TypeOrmModule.forFeature([FieldRepository]),
  ],
})
export class FieldModule {}
