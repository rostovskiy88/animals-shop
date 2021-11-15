export default class CartView {
  productsList = document.querySelector('.products-list');
  totalPrice = document.querySelector('.total');
  cartNumber = document.querySelector('.cart-number');

  displayCartItems(cartItemDetails, totalPrice, cartNumber) {
    const cartHTML = this.renderCartItem(cartItemDetails);
    this.productsList.insertAdjacentHTML('beforeend', cartHTML);
    this.totalPrice.textContent = `Итого: ${totalPrice} UAH`;
    this.cartNumber.textContent = cartNumber;
  }

  renderCartItem = (info) => {
    return `
        <li id="${info.id}" class="list-group-item">
            <div class="title d-flex justify-content-between">
                <p class="h3">${info.breed}</p>
                <i id="deleteposition" class="fas fa-window-close delete" data-id="${info.id}"></i>
            </div>
            <p>Стоимость: ${info.cost} UAH</p>
        </li>
        `;
  };
}
