import ModelM from "../common/modelM.js";

export default class CategoryModel extends ModelM {
    
    getProductsByCategory = async (category) => {
        const data = await this.getData();
        return data.filter(el => el.category === category);
    }

    getDogsByType = async (type) => {
        const data = await this.getData();
        return data.filter(el => el.type === type);
    };

    getCatsByGender = async (gender) => {
        const data = await this.getData();
        return data.filter(el => el.category === 'кот' ? el.gender === gender : null);
    };

    getDogsByGender = async (gender) => {
        const data = await this.getData();
        return data.filter(el => el.category === 'собака' ? el.gender === gender : null);
    };

    getCatsByMadness = async (madness) => {
        const data = await this.getData();
        return data.filter(el => el.madness === madness);
    };

    getRodentsByType = async (type) => {
      const data = await this.getData();
      return data.filter(el => el.type === type);
    };

    sortByPriceDown = (data) => {
        console.log(data);
        const sortedList = data.sort((a, b) => {
          return a.cost - b.cost;
        });
        return sortedList;
      };
    
      sortByPriceUp = (data) => {
        console.log(data);
        const sortedList = data.sort((a, b) => {
          return b.cost - a.cost;
        });
        return sortedList;
      };
}