import { Column, Entity, ManyToOne } from 'typeorm';
import { AppBaseEntity } from '@shared/database/entities/base.entity';
import { NoteTypeEnum } from '@features/note/enum/note-type.enum';
import { WorkspaceEntity } from '@features/workspace/database/workspace.entity';

@Entity()
export class NoteEntity extends AppBaseEntity {

  @Column({
    default: 'Новая запись'
  })
  name: string;

  @Column({type: 'real'})
  lat: string;

  @Column({type: 'real'})
  lng: string;

  @Column('enum', {
    enum: NoteTypeEnum,
    default: NoteTypeEnum.Other
  })
  type: NoteTypeEnum;

  @Column()
  comment: string;

  @ManyToOne(() => WorkspaceEntity, workspace => workspace.id, {
    eager: true
  })
  workspace: WorkspaceEntity;
}
