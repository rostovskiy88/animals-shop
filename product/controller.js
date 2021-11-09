import Model from './model.js';
import View from './view.js';

export default class Controller {
    constructor() {
        this.model = new Model();
        this.view = new View(this.onPriceDown, this.onPriceUp, this.showModal);
    }
    
    init = async () => {
        const data = await this.model.getData();
        this.view.renderList(data);
        this.view.renderModal(data);
    }

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