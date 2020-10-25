import { BaseModel } from '@shared/models/base.model';
import { SeasonEntity } from '@features/season/database/season.entity';

export class SeasonModel extends BaseModel {
  name: string;
  startDate: Date;
  endDate: Date;

  constructor(entity: Partial<SeasonEntity> = {}) {
    super(entity);
    this.name = entity.name;
    this.startDate = entity.startDate;
    this.endDate = entity.endDate;
  }
}
