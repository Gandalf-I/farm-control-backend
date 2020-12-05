import { Injectable } from '@nestjs/common';
import { CultureRepository } from '@features/culture/database/culture.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { CultureEntity } from '@features/culture/database/culture.entity';
import { CultureDto } from '@features/culture/dto/culture.dto';
import { IdDto } from '@shared/dto/id.dto';
import { StatusModel } from '@shared/models/status.model';
import { CultureUpdateDto } from '@features/culture/dto/culture-update.dto';

@Injectable()
export class CultureService {

  constructor(@InjectRepository(CultureRepository)
              private cultureRepository: CultureRepository) {
  }

  async getAllCultures(): Promise<CultureEntity[]> {
    return this.cultureRepository.find();
  }

  async createCulture(body: CultureDto): Promise<CultureEntity> {
    return this.cultureRepository.insertAndReturnOne({
      ...body,
    });
  }

  async patchCulture(body: CultureUpdateDto): Promise<CultureEntity> {
    return this.cultureRepository.updateByIdAndReturn(body.id, body);
  }

  async deleteCulture(body: IdDto): Promise<StatusModel> {
    return this.cultureRepository.deleteById(body.id);
  }
}
