import { Module } from '@nestjs/common';
import { SeasonController } from './season.controller';
import { SeasonService } from './season.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeasonRepository } from '@features/season/database/season.repository';

@Module({
  controllers: [
    SeasonController
  ],
  providers: [
    SeasonService
  ],
  imports: [
    TypeOrmModule.forFeature([SeasonRepository]),
  ],
})
export class SeasonModule {}
