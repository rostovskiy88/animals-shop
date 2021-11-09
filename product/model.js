import ModelM from "../common/modelM.js";
export default class Model extends ModelM {

    sortByPriceDown(data) {
        const sortedList = data.sort((a, b) => {
            return a.cost - b.cost;
        });
        return sortedList;
    }

    sortByPriceUp(data) {
        const sortedList = data.sort((a, b) => {
            return b.cost - a.cost;
        });
        return sortedList;
    }
    
}
   