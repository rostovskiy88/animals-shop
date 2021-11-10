import Publisher from '../common/publisher.js';
import Model from './model.js';
import View from './view.js';

export default class Controller {
    constructor() {
        this.model = new Model();
        this.view = new View(this.onPriceDown, this.onPriceUp, this.listenToClick);
        Publisher.subscribe(Publisher.events.productsCategory, this.filtered);
    }
    
    init = async () => {
        const data = await this.model.getData();
        this.view.renderList(data);
    }

    filtered = (data) => {
        console.log(data);
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
    }
}