import Publisher from '../common/publisher.js';
import Model from './model.js';
import View from './view.js';

export default class Controller {
  constructor() {
    this.model = new Model();
    this.view = new View(
      this.onPriceDown,
      this.onPriceUp,
      this.listenToClick,
      this.changeSearch
    );
    Publisher.subscribe(Publisher.events.productsCategory, this.filtered);
    Publisher.subscribe(Publisher.events.productsDogType, this.filtered);
    Publisher.subscribe(Publisher.events.catsGender, this.filtered);
    Publisher.subscribe(Publisher.events.dogsGender, this.filtered);
    Publisher.subscribe(Publisher.events.catsMadness, this.filtered);
    Publisher.subscribe(Publisher.events.productsAge, this.filtered);
  }

  filtered = (data) => {
    this.view.renderList(data);
  };

  init = async () => {
    const data = await this.model.getData();
    this.view.renderList(data);
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
