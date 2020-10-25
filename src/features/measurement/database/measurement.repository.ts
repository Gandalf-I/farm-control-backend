import { EntityRepository } from 'typeorm';
import { AppBaseRepository } from '@shared/database/repositories/base.repository';
import { MeasurementEntity } from '@features/measurement/database/measurement.entity';

@EntityRepository(MeasurementEntity)
export class MeasurementRepository extends AppBaseRepository<MeasurementEntity> {

}
