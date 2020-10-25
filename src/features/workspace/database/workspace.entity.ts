import { Column, Entity, ManyToMany, OneToMany } from 'typeorm';
import { AppBaseEntity } from '@shared/database/entities/base.entity';
import { UserEntity } from '@features/user/database/user.entity';
import { SeasonEntity } from '@features/season/database/season.entity';

@Entity()
export class WorkspaceEntity extends AppBaseEntity {

  @Column()
  name: string;

  @Column()
  amount: string;

  @OneToMany(() => SeasonEntity, season => season.id)
  season: string;

  @ManyToMany(() => UserEntity)
  user: string;
}
