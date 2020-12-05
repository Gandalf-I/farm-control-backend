import { Module } from '@nestjs/common';
import { CultureController } from './culture.controller';
import { CultureService } from './culture.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CultureRepository } from '@features/culture/database/culture.repository';

@Module({
  controllers: [
    CultureController
  ],
  providers: [
    CultureService
  ],
  imports: [
    TypeOrmModule.forFeature([CultureRepository]),
  ],
})
export class CultureModule {}
