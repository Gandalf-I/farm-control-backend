import { UserEntity } from '@app/features/user/database/user.entity';
import { BaseModel } from '@shared/models/base.model';
import { UserTypeEnum } from '@features/user/enums/user-type.enum';

export class UserModel extends BaseModel {
  login: string;
  email: string;
  type: UserTypeEnum;

  constructor(entity: Partial<UserEntity> = {}) {
    super(entity);
    this.login = entity.login;
    this.email = entity.email;
    this.type = entity.type;
  }
}
