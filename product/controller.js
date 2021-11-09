import Model from './model.js';
import View from './view.js';

export default class Controller {
  //   constructor() {
  //     this.model = new Model();
  //     this.view = new View(this.changeSearch, this.openModal);
  //   }

  //   async init() {
  //     const data = await this.model.getData();
  //     this.view.renderList(data);
  //   }

  //   changeSearch = async () => {
  //     const searchData = this.view.getSearchData();
  //     const data = await this.model.getData(searchData);
  //     this.view.renderList(data);
  //   };
  //   //TODO search init on button click

  //   openModal = async (event) => {
  //     const id = this.view.getProductId(event);
  //     const modalData = await this.model.getModalData(id);
  //     this.view.createModal(modalData);
  //     console.log(id);
  //   };
  // }

  constructor() {
    this.model = new Model();
    this.view = new View(this.onPriceDown, this.onPriceUp, this.showModal);
  }

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

  showModal = async (event) => {
    const id = this.view.getId(event);
    const productDetails = await this.model.getProductDetails(id);
    this.view.displayProductDetails(productDetails);
  };
}
