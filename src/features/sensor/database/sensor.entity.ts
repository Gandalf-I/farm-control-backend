import { Column, Entity, ManyToOne } from 'typeorm';
import { AppBaseEntity } from '@shared/database/entities/base.entity';
import { WorkspaceEntity } from '@features/workspace/database/workspace.entity';

@Entity()
export class SensorEntity extends AppBaseEntity {

  @Column({default: 'Сенсор'})
  name: string;

  @Column()
  lat: string;

  @Column()
  lng: string;

  @ManyToOne(() => WorkspaceEntity)
  workspaceId: string;
}
