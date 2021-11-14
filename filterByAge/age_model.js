import ModelM from "../common/modelM.js";

export default class AgeModel extends ModelM {

    getDataByAge = async (age, category) => {
        const data = await this.getData();
        const filteredByCategory = data.filter(el => el.category === category);
        return filteredByCategory.filter( el => el.birthDate == (2021 - age));
    }

}