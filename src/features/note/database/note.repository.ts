import { EntityRepository } from 'typeorm';
import { AppBaseRepository } from '@shared/database/repositories/base.repository';
import { NoteEntity } from '@features/note/database/note.entity';

@EntityRepository(NoteEntity)
export class NoteRepository extends AppBaseRepository<NoteEntity> {

}
