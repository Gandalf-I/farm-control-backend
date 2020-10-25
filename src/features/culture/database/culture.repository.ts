import { EntityRepository } from 'typeorm';
import { AppBaseRepository } from '@shared/database/repositories/base.repository';
import { CultureEntity } from '@features/culture/database/culture.entity';

@EntityRepository(CultureEntity)
export class CultureRepository extends AppBaseRepository<CultureEntity> {

}
