import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';
import { AppBaseEntity } from '@shared/database/entities/base.entity';
import { UserEntity } from '@features/user/database/user.entity';

@Entity()
export class WorkspaceEntity extends AppBaseEntity {

  @Column()
  name: string;

  @Column()
  creatorId: number;

  @ManyToMany(() => UserEntity, user => user.id, {
    eager: true,
  })
  @JoinTable()
  users: UserEntity[];
}
