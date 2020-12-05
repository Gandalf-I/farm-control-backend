import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';
import { AppBaseEntity } from '@shared/database/entities/base.entity';
import { UserEntity } from '@features/user/database/user.entity';

@Entity()
export class WorkspaceEntity extends AppBaseEntity {

  @Column()
  name: string;

  // @OneToMany(() => SensorEntity, sensor => sensor.id)
  // sensorId: string;

  @Column()
  creatorId: number;

  @ManyToMany(() => UserEntity)
  @JoinTable()
  userId: number[];
}
