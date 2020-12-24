import { BaseModel } from '@shared/models/base.model';
import { FieldEntity } from '@features/field/database/field.entity';
import { CultureEntity } from '@features/culture/database/culture.entity';

export class FieldModel extends BaseModel {
  name: string;
  area: string;
  culture: CultureEntity;
  points: string[];
  sowingDate: string;
  cleaningDate: string;
  averageYield: number;
  tempeAcc: number;
  moistureAcc: number;

  constructor(entity: Partial<FieldEntity> = {}) {
    super(entity);
    this.name = entity.name;
    this.area = entity.area;
    this.culture = entity.culture;
    this.points = entity.points;
    this.sowingDate = entity.sowingDate;
    this.cleaningDate = entity.cleaningDate;
    this.averageYield = entity.averageYield;
    this.tempeAcc = entity.tempeAcc;
    this.moistureAcc = entity.moistureAcc;

  }
}
