import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { SeasonModel } from '@features/season/model/season.model';
import { SeasonDto } from '@features/season/dto/season.dto';
import { SeasonService } from '@features/season/season.service';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '@features/auth/guards/jwt-auth.guard';
import { IdDto } from '@shared/dto/id.dto';
import { StatusModel } from '@shared/models/status.model';

@UseGuards(JwtAuthGuard)
@ApiTags('Season')
@Controller('season/:id')
export class SeasonController {

  constructor(private seasonService: SeasonService) {
  }

  @Get()
  getAllSeasonByWorkspace(@Param('id') id): Promise<SeasonModel[]> {
    return this.seasonService.getAllSeasonByUser(id);
  }

  @Post()
  createSeason(@Param('id') id, @Body() body: SeasonDto): Promise<SeasonModel> {
    return this.seasonService.createSeason(id, body);
  }

  @Patch()
  patchSeason(@Param('id') id,
              @Body() body: SeasonDto): Promise<SeasonModel> {
    return null;
  }

  @Delete()
  deleteSeason(@Param('id') id): Promise<StatusModel> {
    return this.seasonService.deleteSeason(id);
  }

  // async getAllSeasonByUser(): Promise<SeasonEntity[]> {
  //   return this.seasonRepository.find();
  // }
  //
  // async createSeason(body: CultureDto): Promise<SeasonEntity> {
  //   return this.seasonRepository.insertAndReturnOne({
  //     ...body,
  //   });
  // }
  //
  // async patchSeason(body: CultureUpdateDto): Promise<SeasonEntity> {
  //   return this.seasonRepository.updateByIdAndReturn(body.id, body);
  // }
  //
  // async deleteSeason(body: IdDto): Promise<StatusModel> {
  //   return this.seasonRepository.deleteById(body.id);
  // }
}
