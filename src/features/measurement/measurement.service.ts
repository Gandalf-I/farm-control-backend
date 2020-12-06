import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CultureUpdateDto } from '@features/culture/dto/culture-update.dto';
import { IdDto } from '@shared/dto/id.dto';
import { StatusModel } from '@shared/models/status.model';
import { MeasurementEntity } from '@features/measurement/database/measurement.entity';
import { MeasurementRepository } from '@features/measurement/database/measurement.repository';
import { MeasurementDto } from '@features/measurement/dto/measurement.dto';

@Injectable()
export class MeasurementService {

  constructor(@InjectRepository(MeasurementRepository)
              private measurementRepository: MeasurementRepository) {
  }

  async getAllMeasurement(id: string): Promise<MeasurementEntity[]> {
    return this.measurementRepository.findInWorkspace(id);
  }

  async createMeasurement(body: MeasurementDto): Promise<MeasurementEntity> {
    return this.measurementRepository.insertAndReturnOne(body)
  }

  async editMeasurement(body: CultureUpdateDto): Promise<MeasurementEntity> {
    return this.measurementRepository.updateByIdAndReturn(body.id, body);
  }

  async deleteMeasurement(body: IdDto): Promise<StatusModel> {
    return this.measurementRepository.deleteById(body.id);
  }
}
