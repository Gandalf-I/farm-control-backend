import { BaseModel } from '@shared/models/base.model';
import { NoteEntity } from '@features/note/database/note.entity';

export class NoteModel extends BaseModel {
  lat: number;
  lng: number;
  type: number;
  comment: string;

  constructor(entity: Partial<NoteEntity> = {}) {
    super(entity);
    this.lat = entity.lat;
    this.lng = entity.lng;
    this.type = entity.type;
    this.comment = entity.comment;
  }
}
