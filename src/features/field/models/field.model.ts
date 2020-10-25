import { BaseModel } from '@shared/models/base.model';
import { FieldEntity } from '@features/field/database/field.entity';

export class FieldModel extends BaseModel {
  name: string;
  area: number;
  culture: string;
  lat: number[];
  lng: number[];
  sowingDate: Date;
  cleaningDate: Date;
  averageYield: number;
  tempeAcc: number;
  moistureAcc: number;

  constructor(entity: Partial<FieldEntity> = {}) {
    super(entity);
    this.name = entity.name;
    this.area = entity.area;
    this.culture = entity.culture;
    this.lat = entity.lat;
    this.lng = entity.lng;
    this.sowingDate = entity.sowingDate;
    this.cleaningDate = entity.cleaningDate;
    this.averageYield = entity.averageYield;
    this.tempeAcc = entity.tempeAcc;
    this.moistureAcc = entity.moistureAcc;

  }
}
