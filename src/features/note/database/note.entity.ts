import { Column, Entity, ManyToOne } from 'typeorm';
import { AppBaseEntity } from '@shared/database/entities/base.entity';
import { NoteTypeEnum } from '@features/note/enum/note-type.enum';
import { WorkspaceEntity } from '@features/workspace/database/workspace.entity';

@Entity()
export class NoteEntity extends AppBaseEntity {

  @Column()
  name: number;

  @Column()
  lat: number;

  @Column()
  lng: number;

  @Column('enum', {
    enum: NoteTypeEnum
  })
  type: number;

  @Column()
  comment: string;

  @ManyToOne(() => WorkspaceEntity)
  workspace: string;
}
