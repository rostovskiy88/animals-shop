import ModelM from '../common/modelM.js';

export default class CartModel extends ModelM {
  constructor() {
    super();
    this.cartItems = [];
    this.totalPrice = 0;
  }

  getProductDetails = async (id) => {
    const data = await this.getData();
    this.cartItem = data.filter((el) => el.id === id)[0];
    const test = this.cartItems.push(this.cartItem);
    console.log(test);
    this.totalPrice += +this.cartItem.cost;
    console.log(this.totalPrice);
    return this.cartItem;
  };
}
