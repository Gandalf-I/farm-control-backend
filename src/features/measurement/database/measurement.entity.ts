import { Column, Entity, ManyToOne } from 'typeorm';
import { AppBaseEntity } from '@shared/database/entities/base.entity';
import { SensorEntity } from '@features/sensor/database/sensor.entity';

@Entity()
export class MeasurementEntity extends AppBaseEntity {

  @Column({nullable: true})
  time: string;

  @Column({nullable: true})
  illumination: number;

  @Column({nullable: true})
  airTemp: number;

  @Column({nullable: true})
  airHumidity: number;

  @Column({nullable: true})
  soilTemp: number;

  @Column({nullable: true})
  soilHumidity: number;

  @ManyToOne(() => SensorEntity)
  sensor: SensorEntity;
}
