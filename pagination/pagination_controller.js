import PaginationView from './pagination_view.js';
import Publisher from '../common/publisher.js';

export default class PaginController {
  constructor() {
    this.paginView = new PaginationView(this.sendLearnMoreBtnsId, this.sendCartBtnId);
    Publisher.subscribe(Publisher.events.sendDataToPagin, this.PaginInit);
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

  sendLearnMoreBtnsId = (event) => {
    const id = this.paginView.getId(event);
    Publisher.notify(Publisher.events.productId, id);
  };

  sendCartBtnId = (event) => {
    const id = this.paginView.getId(event);
    console.log(id);
    Publisher.notify(Publisher.events.cartId, id);
  };

}
