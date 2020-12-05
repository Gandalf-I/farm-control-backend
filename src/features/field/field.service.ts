import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FieldRepository } from '@features/field/database/field.repository';
import { FieldEntity } from '@features/field/database/field.entity';
import { IdDto } from '@shared/dto/id.dto';
import { FieldDto } from '@features/field/dto/field.dto';

@Injectable()
export class FieldService {

  constructor(@InjectRepository(FieldRepository)
              private fieldRepository: FieldRepository) {
  }

  async getAllField(): Promise<FieldEntity[]> {
    return this.fieldRepository.find();
  }

  async getField(id: IdDto): Promise<FieldEntity> {
    return this.fieldRepository.findOne(id);
  }

  async createField(body: FieldDto): Promise<FieldEntity> {
    return this.fieldRepository.insertAndReturnOne({
      ...body
    });
  }
}
