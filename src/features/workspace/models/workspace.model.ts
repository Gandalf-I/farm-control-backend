import { BaseModel } from '@shared/models/base.model';
import { WorkspaceEntity } from '@features/workspace/database/workspace.entity';
import { UserEntity } from '@features/user/database/user.entity';

export class WorkspaceModel extends BaseModel {
  name: string;
  creatorId: number;
  users: UserEntity[];

  constructor(entity: Partial<WorkspaceEntity> = {}) {
    super(entity);
    this.name = entity.name;
    this.creatorId = entity.creatorId;
    this.users = entity.users
  }
}
