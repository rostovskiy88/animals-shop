import Publisher from "../common/publisher.js";
import CartModel from "./cart_model.js";
import CartView from "./cart_view.js";

export default class CartController {
    constructor() {
        this.view = new CartView();
        this.model = new CartModel();
        Publisher.subscribe(Publisher.events.cartId, this.onAddToCart);
    }

    onAddToCart = async (id) => {
        const data = await this.model.getProductDetails(id);
        const totalPrice = this.model.totalPrice;
        const cartNumber = this.model.cartNumber;
        this.view.displayCartItems(data, totalPrice, cartNumber);
    };

}