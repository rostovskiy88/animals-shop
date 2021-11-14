export default class CartView {
    productsList = document.querySelector('.products-list');
    totalPrice = document.querySelector('.total');

    displayCartItems(cartItemDetails, totalPrice) {
        const cartHTML = this.renderCartItem(cartItemDetails);
        this.productsList.insertAdjacentHTML('beforeend', cartHTML);
        this.totalPrice.textContent = `Итого: ${totalPrice} UAH`;
      }

    renderCartItem = (info) => {
        console.log(info);
        return `
        <li class="list-group-item">
            <p>${info.breed}</p>
            <p>Стоимость: ${info.cost} UAH</p>
        </li>
        `}
}