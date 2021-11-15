import Publisher from '../common/publisher.js';
import Model from './model.js';
import View from './view.js';

export default class Controller {
  constructor() {
    this.model = new Model();
    this.view = new View(this.changeSearch);
    Publisher.subscribe(Publisher.events.sortedData, this.filtered);
  }

  filtered = (data) => {
    const data_send = this.view.renderList(data);
    Publisher.notify(Publisher.events.sendDataToPagin, data_send);
  };

  init = async () => {
    const data = await this.model.getData();
    const data_send = this.view.renderList(data);
    Publisher.notify(Publisher.events.sendDataToPagin, data_send);
  };

  changeSearch = async () => {
    const searchData = this.view.getSearchData();
    const data = await this.model.getSearchData(searchData);
    const data_send = this.view.renderList(data);
    Publisher.notify(Publisher.events.sendDataToPagin, data_send);
  };
}
