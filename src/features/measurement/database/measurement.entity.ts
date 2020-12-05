import { Column, Entity, ManyToOne } from 'typeorm';
import { AppBaseEntity } from '@shared/database/entities/base.entity';
import { SensorEntity } from '@features/sensor/database/sensor.entity';

@Entity()
export class MeasurementEntity extends AppBaseEntity {

  @Column()
  time: Date;

  @Column()
  illumination: number;

  @Column()
  airTemp: number;

  @Column()
  airHumidity: number;

  @Column()
  soilTemp: number;

  @Column()
  soilHumidity: number;

  @ManyToOne(() => SensorEntity)
  sensor: string;
}
