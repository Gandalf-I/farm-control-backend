import { DeepPartial, Repository } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { FindOneOptions } from 'typeorm/find-options/FindOneOptions';
import { StatusModel } from '@shared/models/status.model';
import { HttpException, HttpStatus } from '@nestjs/common';

export class AppBaseRepository<T> extends Repository<T> {

  async findInWorkspace(workspaceId: string): Promise<T[]> {
    return this.find({ where: { workspaceId } });
  }

  async insertAndReturnOne(entity: DeepPartial<T>, identityParam?: any): Promise<T> {

    let result;

    if (identityParam) {
      result = await this.findOne({
        ...identityParam,
      });
    }

    if (result) {
      throw new HttpException(
        'Already exist!',
        HttpStatus.CONFLICT,
      );
    }

    result = await this.insert(this.create(entity));

    const [{ id }] = result.identifiers;

    return this.findOne({ where: { id } });
  }

  async updateByIdAndReturn(id: number, partialEntity: QueryDeepPartialEntity<T>, findOptions?: FindOneOptions<T>): Promise<T> {
    await this.update(id, partialEntity);

    return this.findOne(id, findOptions);
  }

  async deleteById(id: number): Promise<StatusModel> {
    const result = await this.delete(id);

    if (!result.affected) {
      throw new HttpException(
        'Not Found',
        HttpStatus.NOT_FOUND,
      );
    }

    return new StatusModel(!!result.affected);
  }
}
