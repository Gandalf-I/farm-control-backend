import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
// import { JwtAuthGuard } from '@features/auth/guards/jwt-auth.guard';
import { SeasonModel } from '@features/season/model/season.model';
import { SeasonDto } from '@features/season/dto/season.dto';
import { SeasonService } from '@features/season/season.service';
import { ApiTags } from '@nestjs/swagger';

// @UseGuards(JwtAuthGuard)
@ApiTags('Season')
@Controller('season/:id')
export class SeasonController {

  constructor(private seasonService: SeasonService) {
  }

  @Get()
  getSeason(@Param('id') id): Promise<SeasonModel[]> {
    return null;
  }

  @Post()
  addSeason(@Param('id') id,
            @Body() body: SeasonDto): Promise<SeasonModel> {
    return null;
  }

  @Patch()
  patchSeason(@Param('id') id,
              @Body() body: SeasonDto): Promise<SeasonModel> {
    return null;
  }

  @Delete()
  deleteSeason(@Param('id') id): Promise<SeasonModel> {
    return null;
  }
}
