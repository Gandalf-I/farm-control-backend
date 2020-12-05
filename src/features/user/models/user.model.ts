import { UserEntity } from '@app/features/user/database/user.entity';
import { BaseModel } from '@shared/models/base.model';

export class UserModel extends BaseModel {
  login: string;
  email: string;

  constructor(entity: Partial<UserEntity> = {}) {
    super(entity);
    this.login = entity.login;
    this.email = entity.email;
  }
}
