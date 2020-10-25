import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { AppBaseEntity } from '@shared/database/entities/base.entity';
import { WorkspaceEntity } from '@features/workspace/database/workspace.entity';

@Entity()
export class FieldEntity extends AppBaseEntity {

  @Column()
  name: string;

  @Column()
  area: number;

  @OneToMany(() => WorkspaceEntity, workspace => workspace.id)
  culture: string;

  @Column()
  lat: number[];

  @Column()
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

  @ManyToOne(() => WorkspaceEntity)
  workspace: string;

}
