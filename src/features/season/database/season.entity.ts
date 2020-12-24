import { Column, Entity, ManyToOne } from 'typeorm';
import { AppBaseEntity } from '@shared/database/entities/base.entity';
import { WorkspaceEntity } from '@features/workspace/database/workspace.entity';

@Entity()
export class SeasonEntity extends AppBaseEntity {

  @Column()
  name: string;

  @Column()
  startDate: string;

  @Column()
  endDate: string;

  @ManyToOne(() => WorkspaceEntity, workspace => workspace.id, {
    eager: true,
  })
  workspace: WorkspaceEntity;
}
