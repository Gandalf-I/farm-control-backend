import { Module } from '@nestjs/common';
import { NoteService } from './note.service';
import { NoteController } from './note.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NoteRepository } from '@features/note/database/note.repository';

@Module({
  providers: [
    NoteService
  ],
  controllers: [
    NoteController
  ],
  imports: [
    TypeOrmModule.forFeature([NoteRepository]),
  ],
})
export class NoteModule {}
