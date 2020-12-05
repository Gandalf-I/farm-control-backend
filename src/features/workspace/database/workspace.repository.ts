import { EntityRepository } from 'typeorm';
import { AppBaseRepository } from '@shared/database/repositories/base.repository';
import { WorkspaceEntity } from '@features/workspace/database/workspace.entity';

@EntityRepository(WorkspaceEntity)
export class WorkspaceRepository extends AppBaseRepository<WorkspaceEntity> {

}
