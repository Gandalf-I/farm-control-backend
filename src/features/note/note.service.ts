import { Injectable } from '@nestjs/common';
import { NoteRepository } from '@features/note/database/note.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { NoteEntity } from '@features/note/database/note.entity';

@Injectable()
export class NoteService {

  constructor(@InjectRepository(NoteRepository)
              private noteRepository: NoteRepository) {
  }

  async getAllNote(): Promise<NoteEntity[]> {
    return this.noteRepository.find();
  }

  // async createNote(): NoteEntity {
  //   return this.noteRepository.create()
  // }
}
