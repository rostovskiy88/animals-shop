import Publisher from "../common/publisher.js";
import CategoryModel from "./category_model.js";
import CategoryView from "./category_view.js";

export default class CategoryController {

    constructor() {
        this.view = new CategoryView(this.listenToClick);
        this.model = new CategoryModel();
    }

    listenToClick = async (event) => {
        const value = event.target.attributes['data-category'].value;
        const data = await this.model.getProductsByCategory(value);
        Publisher.notify(Publisher.events.productsCategory, data);
    }
}