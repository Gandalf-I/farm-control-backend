import { BaseModel } from '@shared/models/base.model';
import { WorkspaceEntity } from '@features/workspace/database/workspace.entity';

export class WorkspaceModel extends BaseModel {
  name: string;
  creatorId: number;

  constructor(entity: Partial<WorkspaceEntity> = {}) {
    super(entity);
    this.name = entity.name;
    this.creatorId = entity.creatorId;

  }
}
