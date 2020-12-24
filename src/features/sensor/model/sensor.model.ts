import { BaseModel } from '@shared/models/base.model';
import { SensorEntity } from '@features/sensor/database/sensor.entity';

export class SensorModel extends BaseModel {
  name: string;
  lat: string;
  lng: string;
  workspaceId: string;

  constructor(entity: Partial<SensorEntity> = {}) {
    super(entity);
    this.name = entity.name;
    this.lat = entity.lat;
    this.lng = entity.lng;
    this.workspaceId = entity.workspaceId;
  }
}
