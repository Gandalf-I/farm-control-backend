import { BaseModel } from '@shared/models/base.model';
import { SensorEntity } from '@features/sensor/database/sensor.entity';

export class SensorModel extends BaseModel {
  name: number;
  lat: number;
  lng: number;
  workspace: string;

  constructor(entity: Partial<SensorEntity> = {}) {
    super(entity);
    this.name = entity.name;
    this.lat = entity.lat;
    this.lng = entity.lng;
    this.workspace = entity.workspace;
  }
}
