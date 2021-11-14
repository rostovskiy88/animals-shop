import Publisher from '../common/publisher.js';
import Model from './model.js';
import View from './view.js';
import PaginController from '../pagination/pagination_controller.js';

export default class Controller {
  constructor() {
    this.model = new Model();
    this.view = new View(
      this.onPriceDown,
      this.onPriceUp,
      this.listenToClick,
      this.changeSearch
    );
    this.paginContr = new PaginController();
    Publisher.subscribe(Publisher.events.productsCategory, this.filtered);
  }

  filtered = (data) => {
    console.log(data);
    this.view.renderList(data);
  };

  init = async () => {
    this.data = await this.model.getData();
    //this.view.renderList(this.data);
    this.sendDataPagin(this.data);
  };

  sendDataPagin = async () => {
    const data = await this.model.getData();
    const data_send = this.view.renderList(data);
    this.paginContr.PaginInit(data_send);
    console.log(data);
  };

  onPriceDown = async () => {
    const data = await this.model.getData();
    const sortedData = this.model.sortByPriceDown(data);
    this.view.renderList(sortedData);
  };

  onPriceUp = async () => {
    const data = await this.model.getData();
    const sortedData = this.model.sortByPriceUp(data);
    this.view.renderList(sortedData);
  };

  listenToClick = (event) => {
    const id = this.view.getId(event);
    Publisher.notify(Publisher.events.productId, id);
  };

  changeSearch = async () => {
    const searchData = this.view.getSearchData();
    const data = await this.model.getSearchData(searchData);
    this.view.renderList(data);
  };
}
