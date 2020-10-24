import { Entity, Column } from 'typeorm';
import { AppBaseEntity } from '@app/shared/database/entities/base.entity';
import { UserTypeEnum } from '@app/features/user/enums/user-type.enum';

@Entity()
export class UserEntity extends AppBaseEntity {

  @Column()
  login: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column('enum', {
    enum: UserTypeEnum,
    default: UserTypeEnum.User
  })
  type: string;
}
