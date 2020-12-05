import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { NoteService } from '@features/note/note.service';
import { NoteModel } from '@features/note/models/note.model';
import { NoteDto } from '@features/note/dto/note.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Note')
@Controller('note/:id')
export class NoteController {

  constructor(private noteService: NoteService) {
  }

  @Get()
  getNote(@Param('id') id): Promise<NoteModel[]> {
    return null;
  }

  @Post()
  addNote(@Param('id') id,
          @Body() body: NoteDto): Promise<NoteModel> {
    return null;
  }

  @Patch()
  patchNote(@Param('id') id,
            @Body() body: NoteDto): Promise<NoteModel> {
    return null;
  }

  @Delete()
  deleteNote(@Param('id') id): Promise<NoteModel> {
    return null;
  }
}
