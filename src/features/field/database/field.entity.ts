import { Column, Entity, ManyToOne, OneToOne } from 'typeorm';
import { AppBaseEntity } from '@shared/database/entities/base.entity';
import { WorkspaceEntity } from '@features/workspace/database/workspace.entity';
import { CultureEntity } from '@features/culture/database/culture.entity';
import { Point } from '@shared/interfaces/point.interface';

@Entity()
export class FieldEntity extends AppBaseEntity {

  @Column({default: 'Поле'})
  name: string;

  @Column({type: 'real'})
  area: string;

  @Column('text', { array: true })
  points: string[];

  @Column({nullable: true})
  sowingDate: string;

  @Column({nullable: true})
  cleaningDate: string;

  @Column({nullable: true})
  averageYield: number;

  @Column({nullable: true})
  tempeAcc: number;

  @Column({nullable: true})
  moistureAcc: number;

  @OneToOne(() => CultureEntity, culture => culture.id)
  culture: CultureEntity;

  @ManyToOne(() => WorkspaceEntity)
  workspace: number;

}
