import { Column, Entity, ManyToOne, OneToOne } from 'typeorm';
import { AppBaseEntity } from '@shared/database/entities/base.entity';
import { WorkspaceEntity } from '@features/workspace/database/workspace.entity';
import { CultureEntity } from '@features/culture/database/culture.entity';

@Entity()
export class FieldEntity extends AppBaseEntity {

  @Column()
  name: string;

  @Column()
  area: number;

  @Column("int", { array: true })
  lat: number[];

  @Column("int", { array: true })
  lng: number[];

  @Column()
  sowingDate: Date;

  @Column()
  cleaningDate: Date;

  @Column()
  averageYield: number;

  @Column()
  tempeAcc: number;

  @Column()
  moistureAcc: number;

  @OneToOne(() => CultureEntity, culture => culture.id)
  culture: number;

  @ManyToOne(() => WorkspaceEntity)
  workspace: number;

}
