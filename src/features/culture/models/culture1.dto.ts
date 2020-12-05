import { BaseModel } from '@shared/models/base.model';
import { CultureEntity } from '@features/culture/database/culture.entity';

export class Culture1Dto extends BaseModel {
  name: string;
  baseTemperature: number;

  constructor(entity: Partial<CultureEntity> = {}) {
    super(entity);
    this.name = entity.name
    this.baseTemperature = entity.baseTemperature
  }
}
