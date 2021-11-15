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
    sendDataToPagin: 'SEND DATA TO PAGINATION',
    cartId: 'ID OF THE PRODUCT TO GO TO CART',
    sendMsgToTG: 'SEND MESSAGE TO TELEGRAM',
    sortedData: 'ANY SORTED LIST'
  };
}
