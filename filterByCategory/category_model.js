import ModelM from "../common/modelM.js";

export default class CategoryModel extends ModelM {
    
    getProductsByCategory = async (category) => {
        const data = await this.getData();
        return data.filter(el => el.category === category);
    }
}