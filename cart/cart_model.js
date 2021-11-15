import ModelM from "../common/modelM.js";

export default class CartModel extends ModelM {
    constructor() {
        super();
        this.cartItems = [];
        this.totalPrice = 0;
        this.cartNumber = 0;
    }

    getProductDetails = async (id) => {
        const data = await this.getData();
        const cartItem = data.filter((el) => el.id === id)[0];
        this.cartNumber++;
        this.totalPrice += +cartItem.cost;
        this.saveSessionStorage(cartItem.id, cartItem);
        return cartItem;
    };

    saveSessionStorage(id, item) {
        sessionStorage.setItem(id, JSON.stringify(item));
    }
}