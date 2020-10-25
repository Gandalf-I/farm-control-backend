import { Entity, Column, ManyToMany } from 'typeorm';
import { AppBaseEntity } from '@app/shared/database/entities/base.entity';
import { UserTypeEnum } from '@app/features/user/enums/user-type.enum';
import { WorkspaceEntity } from '@features/workspace/database/workspace.entity';

@Entity()
export class UserEntity extends AppBaseEntity {

  @Column()
  login: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @ManyToMany(() => WorkspaceEntity)
  workspace: string;

  @Column('enum', {
    enum: UserTypeEnum,
    default: UserTypeEnum.User
  })
  type: string;
}
