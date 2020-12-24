import { BaseModel } from '@shared/models/base.model';
import { MeasurementEntity } from '@features/measurement/database/measurement.entity';
import { SensorEntity } from '@features/sensor/database/sensor.entity';

export class MeasurementsModel extends BaseModel {
  time: string;
  illumination: number;
  airTemp: number;
  airHumidity: number;
  soilTemp: number;
  soilHumidity: number;
  sensor: SensorEntity;

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
