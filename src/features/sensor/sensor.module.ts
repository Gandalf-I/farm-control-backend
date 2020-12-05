import { Module } from '@nestjs/common';
import { SensorService } from './sensor.service';
import { SensorController } from './sensor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SensorRepository } from '@features/sensor/database/sensor.repository';

@Module({
  providers: [
    SensorService
  ],
  controllers: [
    SensorController
  ],
  imports: [
    TypeOrmModule.forFeature([SensorRepository]),
  ],
})
export class SensorModule {}
