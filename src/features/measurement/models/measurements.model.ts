import { BaseModel } from '@shared/models/base.model';
import { MeasurementEntity } from '@features/measurement/database/measurement.entity';

export class MeasurementsModel extends BaseModel {
  time: Date;
  illumination: number;
  airTemp: number;
  airHumidity: number;
  soilTemp: number;
  soilHumidity: number;
  sensor: string;

  constructor(entity: Partial<MeasurementEntity> = {}) {
    super(entity);
    this.time = entity.time;
    this.illumination = entity.illumination;
    this.airTemp = entity.airTemp;
    this.airHumidity = entity.airHumidity;
    this.soilTemp = entity.soilTemp;
    this.soilHumidity = entity.soilHumidity;
    this.sensor = entity.sensor;
  }
}
