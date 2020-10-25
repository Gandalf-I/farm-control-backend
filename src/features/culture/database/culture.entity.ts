import { Column, Entity } from 'typeorm';
import { AppBaseEntity } from '@shared/database/entities/base.entity';

@Entity()
export class CultureEntity extends AppBaseEntity {

  @Column()
  name: string;

  @Column()
  baseTemperature: number;

}
