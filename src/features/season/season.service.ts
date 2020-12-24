import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StatusModel } from '@shared/models/status.model';
import { SeasonRepository } from '@features/season/database/season.repository';
import { SeasonEntity } from '@features/season/database/season.entity';
import { SeasonDto } from '@features/season/dto/season.dto';

@Injectable()
export class SeasonService {
  constructor(@InjectRepository(SeasonRepository)
              private seasonRepository: SeasonRepository) {
  }

  async getAllSeasonByUser(id): Promise<SeasonEntity[]> {
    return this.seasonRepository
      .createQueryBuilder('season')
      .leftJoinAndSelect('season.workspace', 'workspace')
      .where(`workspace.id=${id}`)
      .getMany();
  }

  async createSeason(workspaceId: string, body: SeasonDto): Promise<SeasonEntity> {
    const season = await this.seasonRepository.insertAndReturnOne({
      ...body,
    });

    return this.setRelationsWorkspaceAndReturn(season.id, workspaceId)
  }

  async patchSeason(id, body: SeasonDto): Promise<SeasonEntity> {
    return this.seasonRepository.updateByIdAndReturn(id, body);
  }

  async deleteSeason(id): Promise<StatusModel> {
    return this.seasonRepository.deleteById(id);
  }

  private async setRelationsWorkspaceAndReturn(seasonId, workspaceId) {
    await this.seasonRepository
      .createQueryBuilder()
      .relation(SeasonEntity, 'workspace')
      .of(seasonId)
      .set(workspaceId);


    return this.seasonRepository.findOne(seasonId);
  }
}
