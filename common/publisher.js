export default class Publisher {
  static listeners = {};

  static subscribe(name, listener) {
    if (!this.listeners[name]) {
      this.listeners[name] = [];
    }
    this.listeners[name].push(listener);
  }

  static notify(name, data) {
    if (!this.listeners[name]) {
      this.listeners[name] = [];
    }
    this.listeners[name].forEach((fn) => fn(data));
  }

  static events = {
    productId: 'GET PRODUCT ID',
    productsCategory: 'DISPLAY PRODUCTS BY CATEGORY',
    productsDogType: 'DISPLAY DOGS BY TYPES',
    catsGender: 'DISPLAY CATS BY GENDER',
    dogsGender: 'DISPLAY DOGS BY GENDER',
    catsMadness: 'DISPLAY CATS BY MADNESS',
    productsAge: 'DISPLAY PRODUCTS BY AGE',
    paginationInit: 'SEND DATA TO PAGINATION',
  };
}
