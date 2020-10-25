import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { SeasonModel } from '@features/season/model/season.model';
import { SeasonDto } from '@features/season/dto/season.dto';

@Controller('note/:workspace')
export class NoteController {

  @Get()
  getNote(@Param('workspace') workspace): Promise<SeasonModel[]> {
    return null;
  }

  @Post()
  addNote(@Param('workspace') workspace,
          @Body() body: SeasonDto): Promise<SeasonModel> {
    return null;
  }

  @Patch()
  patchNote(@Param('workspace') workspace,
            @Body() body: SeasonDto): Promise<SeasonModel> {
    return null;
  }

  @Delete()
  deleteNote(@Param('workspace') workspace): Promise<SeasonModel> {
    return null;
  }
}
