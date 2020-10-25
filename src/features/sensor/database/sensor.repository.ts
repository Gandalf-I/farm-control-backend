import { EntityRepository } from 'typeorm';
import { AppBaseRepository } from '@shared/database/repositories/base.repository';
import { SensorEntity } from '@features/sensor/database/sensor.entity';

@EntityRepository(SensorEntity)
export class SensorRepository extends AppBaseRepository<SensorEntity> {

}
