import { EntityRepository } from 'typeorm';
import { AppBaseRepository } from '@shared/database/repositories/base.repository';
import { FieldEntity } from '@features/field/database/field.entity';

@EntityRepository(FieldEntity)
export class FieldRepository extends AppBaseRepository<FieldEntity> {

}
