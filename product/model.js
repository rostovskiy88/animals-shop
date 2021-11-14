import ModelM from '../common/modelM.js';
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

  giveData = async () => {
    const data = await this.getData();
    return data;
  };

  getSearchData = async (searchData = '') => {
    const search = searchData.toLocaleLowerCase();
    if (search.trim() === '') {
      this.data = await this.getData();
    } else {
      const products = await this.getData();

      this.data = products.filter((product) => {
        let dataToCheck = Object.values(product).map((val) =>
          val.toLocaleLowerCase()
        );
        return dataToCheck.filter((el) => el.includes(search)).length !== 0;
      });
      console.log('new data', this.data);
    }
    return this.data;
  };
}
