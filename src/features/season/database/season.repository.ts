import { EntityRepository } from 'typeorm';
import { AppBaseRepository } from '@shared/database/repositories/base.repository';
import { SeasonEntity } from '@features/season/database/season.entity';

@EntityRepository(SeasonEntity)
export class SeasonRepository extends AppBaseRepository<SeasonEntity> {

}
