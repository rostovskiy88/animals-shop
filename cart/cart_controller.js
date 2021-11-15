import Publisher from '../common/publisher.js';
import CartModel from './cart_model.js';
import CartView from './cart_view.js';

export default class CartController {
  constructor() {
    this.view = new CartView();
    this.model = new CartModel();
    Publisher.subscribe(Publisher.events.cartId, this.onAddToCart);
    this.orderButton = document.getElementById('orderbutton');
    this.cancelButton = document.getElementById('cancelbutton');
    this.modalWindow = document.getElementById('cartModal');
    this.name = document.getElementById('name');
    this.surname = document.getElementById('surname');
    this.phone = document.getElementById('phone');
    this.email = document.getElementById('email');
  }

  onAddToCart = async (id) => {
    const data = await this.model.getProductDetails(id);
    const totalPrice = this.model.totalPrice;
    this.view.displayCartItems(data, totalPrice);
    this.orderButton.addEventListener('click', this.sendInfoToTG);
    this.cancelButton.addEventListener('click', () => {
      this.modalWindow.style.display = 'none';
    });
    return data;
  };

  sendInfoToTG = async () => {
    const nameRegex = /^[а-яА-Яa-zA-Z]+$/gi;
    const surnameRegex = /^[а-яА-Яa-zA-Z]+$/gi;
    const phoneRegex = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (nameRegex.test(this.name.value) === false) {
      console.log(nameRegex.test(this.name.value));
      console.log(this.name.value);
      alert(
        'Поле "Имя" содержит некорректные символы или пусто. Повторите попытку'
      );
      return;
    } else if (surnameRegex.test(this.surname.value) === false) {
      alert(
        'Поле "Фамилия" содержит некорректные символы или пусто. Повторите попытку'
      );
      return;
    } else if (phoneRegex.test(this.phone.value) === false) {
      alert(
        'Поле "Телефон" содержит некорректные символы или пусто. Повторите попытку'
      );
      return;
    } else if (emailRegex.test(this.email.value) === false) {
      alert(
        'Поле "E-mail" содержит некорректные символы или пусто. Повторите попытку'
      );
      return;
    }
    const testData = {
      totPrice: await this.model.totalPrice,
      totCount: await this.model.cartItems,
      data: await this.model.getData(),
      name: this.name.value,
      surname: this.surname.value,
      phone: this.phone.value,
      email: this.email.value,
    };
    this.modalWindow.style.display = 'none';

    Publisher.notify(Publisher.events.sendMsgToTG, testData);
  };
}
