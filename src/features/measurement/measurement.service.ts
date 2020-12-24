import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IdDto } from '@shared/dto/id.dto';
import { StatusModel } from '@shared/models/status.model';
import { MeasurementEntity } from '@features/measurement/database/measurement.entity';
import { MeasurementRepository } from '@features/measurement/database/measurement.repository';
import { MeasurementsModel } from '@features/measurement/models/measurements.model';

@Injectable()
export class MeasurementService {

  constructor(@InjectRepository(MeasurementRepository)
              private measurementRepository: MeasurementRepository) {
  }

  async getAllMeasurement(): Promise<MeasurementEntity[]> {
    return this.measurementRepository.find();
  }

  async createMeasurement(body: MeasurementsModel[]): Promise<StatusModel> {
    const measurementAvg = {
      illumination: this.getAvg(body.map((value => value.illumination))),
      airTemp: this.getAvg(body.map((value => value.airTemp))),
      airHumidity: this.getAvg(body.map((value => value.airHumidity))),
      soilTemp: this.getAvg(body.map((value => value.soilTemp))),
      soilHumidity: this.getAvg(body.map((value => value.soilHumidity)))
    }

    await this.measurementRepository.insertAndReturnOne(measurementAvg)

    return new StatusModel(true);
  }

  async deleteMeasurement(body: IdDto): Promise<StatusModel> {
    return this.measurementRepository.deleteById(body.id);
  }

  getAvg(arr) {
    return (Math.max(...arr) + Math.min(...arr)) / 2;
  }
}
