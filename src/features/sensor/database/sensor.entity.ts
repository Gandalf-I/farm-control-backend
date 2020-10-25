import { Column, Entity, ManyToOne } from 'typeorm';
import { AppBaseEntity } from '@shared/database/entities/base.entity';
import { WorkspaceEntity } from '@features/workspace/database/workspace.entity';

@Entity()
export class SensorEntity extends AppBaseEntity {

  @Column()
  name: number;

  @Column()
  lat: number;

  @Column()
  lng: number;

  @ManyToOne(() => WorkspaceEntity)
  workspace: string;
}
