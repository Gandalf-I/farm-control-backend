import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { NoteService } from '@features/note/note.service';
import { NoteModel } from '@features/note/models/note.model';
import { NoteDto } from '@features/note/dto/note.dto';
import { ApiTags } from '@nestjs/swagger';
import { StatusModel } from '@shared/models/status.model';

@ApiTags('Note')
@Controller('note/:id')
export class NoteController {

  constructor(private noteService: NoteService) {
  }

  @Get()
  getNotes(@Param('id') id): Promise<NoteModel[]> {
    return this.noteService.getAllNote();
  }

  @Post()
  createNote(@Param('id') id,
          @Body() body: NoteDto): Promise<NoteModel> {
    return this.noteService.createNote(body);
  }

  @Patch()
  patchNote(@Param('id') id,
            @Body() body: NoteDto): Promise<NoteModel> {
    return null;
  }

  @Delete()
  deleteNote(@Param('id') id): Promise<StatusModel> {
    return this.noteService.deleteNote(id);
  }
}
