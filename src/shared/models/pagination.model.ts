export class PaginationModel {
  totalPages: number;
  page: number;
  pageSize: number;
  total: number;

  constructor(totalPages = 0, page = 0, pageSize = 0, total = 0) {
    this.totalPages = totalPages;
    this.page = page;
    this.pageSize = pageSize;
    this.total = total;
  }
}
