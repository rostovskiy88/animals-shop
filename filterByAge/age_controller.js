import Publisher from "../common/publisher.js";
import AgeModel from "./age_model.js";
import AgeView from "./age_view.js";

export default class AgeController {
    constructor() {
        this.view = new AgeView(this.sortByAge);
        this.model = new AgeModel();
    }

    sortByAge = async (event) => {
        const value = event.target.value;
        const category = event.target.attributes['data-category'].value;
        const data = await this.model.getDataByAge(value, category);
        this.view.renderAge(category, value);
        Publisher.notify(Publisher.events.productsAge, data);
    }
}