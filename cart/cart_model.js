import ModelM from "../common/modelM.js";

export default class CartModel extends ModelM {
    constructor() {
        super();
        this.cartItems = [];
        this.totalPrice = 0;
    }

    getProductDetails = async (id) => {
        const data = await this.getData();
        const cartItem = data.filter((el) => el.id === id)[0];
        this.totalPrice += +cartItem.cost;
        return cartItem;
    };
}