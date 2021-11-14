import PaginationView from './pagination_view.js';
import Publisher from '../common/publisher.js';

export default class PaginController {
  constructor() {
    this.paginView = new PaginationView();
  }

  PaginInit = async (data) => {
    this.paginView.DisplayList(
      data,
      this.paginView.list_element,
      this.paginView.rows,
      this.paginView.current_page
    );
    this.paginView.SetupPagination(
      data,
      this.paginView.pagination_element,
      this.paginView.rows
    );
  };
}
