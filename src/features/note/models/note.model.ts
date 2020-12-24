import { BaseModel } from '@shared/models/base.model';
import { NoteEntity } from '@features/note/database/note.entity';

export class NoteModel extends BaseModel {
  name: string;
  lat: string;
  lng: string;
  type: number;
  comment: string;

  constructor(entity: Partial<NoteEntity> = {}) {
    super(entity);
    this.name = entity.name;
    this.lat = entity.lat;
    this.lng = entity.lng;
    this.type = entity.type;
    this.comment = entity.comment;
  }
}
