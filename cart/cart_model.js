import ModelM from '../common/modelM.js';
import Publisher from '../common/publisher.js';

export default class CartModel extends ModelM {
  constructor() {
    super();
    this.cartItems = [];
    this.totalPrice = 0;
    this.cartNumber = 0;
    Publisher.subscribe(Publisher.events.sendMsgToTG, this.testDelete);
  }

  getProductDetails = async (id) => {
    const data = await this.getData();
    this.cartItem = data.filter((el) => el.id === id)[0];
    this.cartNumber++;
    const test = this.cartItems.push(this.cartItem);
    console.log(test);
    this.totalPrice += +this.cartItem.cost;
    return this.cartItem;
  };

  testDelete = async () => {
    this.totalPrice = 0;
    this.cartNumber = 0;
    console.log('works');
  };
}
