import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
// import { JwtAuthGuard } from '@features/auth/guards/jwt-auth.guard';
import { SeasonModel } from '@features/season/model/season.model';
import { SeasonDto } from '@features/season/dto/season.dto';

// @UseGuards(JwtAuthGuard)
@Controller('season/:workspace')
export class SeasonController {

  @Get()
  getSeason(@Param('workspace') workspace): Promise<SeasonModel[]> {
    return null;
  }

  @Post()
  addSeason(@Param('workspace') workspace,
            @Body() body: SeasonDto): Promise<SeasonModel> {
    return null;
  }

  @Patch()
  patchSeason(@Param('workspace') workspace,
              @Body() body: SeasonDto): Promise<SeasonModel> {
    return null;
  }

  @Delete()
  deleteSeason(@Param('workspace') workspace): Promise<SeasonModel> {
    return null;
  }
}
