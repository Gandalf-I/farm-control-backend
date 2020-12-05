import { PaginationModel } from '@shared/models/pagination.model';

export class FindAllModel<E> {
  items: E[];
  meta: PaginationModel;

  constructor(items: E[], meta = new PaginationModel()) {
    this.items = items;
    this.meta = meta;
  }
}
