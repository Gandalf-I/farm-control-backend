import { Module } from '@nestjs/common';
import { DATABASE_SETTINGS } from '@core/database/database.config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync(DATABASE_SETTINGS),
  ]
})
export class DatabaseModule {}
