import { Column, Entity, OneToOne, PrimaryColumn } from 'typeorm';
import { AppBaseEntity } from '@shared/database/entities/base.entity';
import { FieldEntity } from '@features/field/database/field.entity';

@Entity()
export class CultureEntity extends AppBaseEntity {

  @PrimaryColumn()
  name: string;

  @Column()
  baseTemperature: number;

  @OneToOne(() => FieldEntity)
  field: number;
}
