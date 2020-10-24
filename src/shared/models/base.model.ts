import { AppBaseEntity } from '@shared/database/entities/base.entity';

export class BaseModel {
  id: number;
  createdAt: Date;
  updatedAt: Date;

  constructor({
                id,
                createdAt,
                updatedAt,
              }: Partial<AppBaseEntity> = {}) {
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
