import PaginationView from './pagination_view.js';
import Publisher from '../common/publisher.js';

export default class PaginController {
  constructor() {
    this.PaginView = new PaginationView();
    Publisher.subscribe(
      Publisher.events.paginationInit,
      this.PaginView.PaginInit
    );
  }
}
