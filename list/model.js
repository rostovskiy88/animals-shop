import googleJson from './config.js';

export default class Model {
  loadGoogleSheet = async () => {
    const resp = await fetch(googleJson);
    const data = await resp.json();
    return data;
  };

  getData = async (searchData = '') => {
    const search = searchData.toLocaleLowerCase();
    if (search.trim() === '') {
      this.data = await this.loadGoogleSheet();
    } else {
      const products = await this.loadGoogleSheet();

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

  getModalData = async (id) => {
    return this.data.filter((el) => el.id === id)[0];
  };
}
