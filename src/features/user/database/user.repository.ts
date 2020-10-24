import { AppBaseRepository } from '@app/shared/database/repositories/base.repository';
import { UserEntity } from '@app/features/user/database/user.entity';
import { EntityRepository } from 'typeorm';

@EntityRepository(UserEntity)
export class UserRepository extends AppBaseRepository<UserEntity> {

}
