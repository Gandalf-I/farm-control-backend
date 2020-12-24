import { Injectable } from '@nestjs/common';
import { NoteRepository } from '@features/note/database/note.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { NoteEntity } from '@features/note/database/note.entity';
import { StatusModel } from '@shared/models/status.model';

@Injectable()
export class NoteService {

  constructor(@InjectRepository(NoteRepository)
              private noteRepository: NoteRepository) {
  }

  async getAllNote(): Promise<NoteEntity[]> {
    return this.noteRepository.find();
  }

  async getNotes(workspaceId): Promise<NoteEntity[]> {
    return this.noteRepository.find({where:  { workspaceId }});
  }

  async createNote(note): Promise<NoteEntity> {
    return this.noteRepository.insertAndReturnOne(note);
  }

  async deleteNote(id): Promise<StatusModel> {
    return this.noteRepository.deleteById(id);
  }
}
