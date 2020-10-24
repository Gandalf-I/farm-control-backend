import { DeepPartial, Repository } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { FindOneOptions } from 'typeorm/find-options/FindOneOptions';

export class AppBaseRepository<T> extends Repository<T> {

  async insertAndReturnOne(entity: DeepPartial<T>): Promise<T> {
    const result = await this.insert(this.create(entity));

    const [{id}] = result.identifiers;

    return this.findOne({where: {id}});
  }

  async updateByIdAndReturn(id: any, partialEntity: QueryDeepPartialEntity<T>, findOptions?: FindOneOptions<T>) {
    await this.update(id, partialEntity);

    return this.findOne(id, findOptions);
  }
}
