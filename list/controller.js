import Model from './model.js';
import View from './view.js';

export default class Controller {
  constructor() {
    this.model = new Model();
    this.view = new View(this.changeSearch, this.openModal);
  }

  async init() {
    const data = await this.model.getData();
    this.view.renderList(data);
  }

  changeSearch = async () => {
    const searchData = this.view.getSearchData();
    const data = await this.model.getData(searchData);
    this.view.renderList(data);
  };
  //TODO search init on button click

  openModal = async (event) => {
    const id = this.view.getProductId(event);
    const modalData = await this.model.getModalData(id);
    this.view.createModal(modalData);
    console.log(id);
  };
}
