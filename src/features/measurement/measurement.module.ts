import { Module } from '@nestjs/common';
import { MeasurementController } from './measurement.controller';
import { MeasurementService } from './measurement.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MeasurementRepository } from '@features/measurement/database/measurement.repository';

@Module({
  controllers: [
    MeasurementController
  ],
  providers: [
    MeasurementService
  ],
  imports: [
    TypeOrmModule.forFeature([MeasurementRepository]),
  ],
})
export class MeasurementModule {}
