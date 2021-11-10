export default class View {
  domElems = [
    { name: 'cardsContainer', selector: '.cards' },
    { name: 'searchInput', selector: '#search-input' },
    { name: 'animalsModal', selector: '#exampleModal' },
  ];

  linkDomElem() {
    this.dom = this.domElems.reduce((acc, current) => {
      acc[current.name] = document.querySelector(current.selector);
      console.log(acc);
      return acc;
    }, {});
  }

  constructor(changeSearch, openModal) {
    this.linkDomElem();
    this.dom.searchInput.addEventListener('change', changeSearch);
    this.openModal = openModal;
  }

  async renderList(list) {
    const renderedHTML = list.map((el) => this.renderCard(el));
    this.dom.cardsContainer.innerHTML = await renderedHTML.join('');
  }

  getSearchData() {
    console.log(this.dom.searchInput.value);
    return this.dom.searchInput.value;
  }

  getProductId(event) {
    return event.target.attributes['data-product-id'].value;
  }

  createModal = async (data) => {
    const modalHTML = await this.renderModal(data);
    this.dom.productModal.innerHTML = modalHTML;
  };

  renderCard(data) {
    return `<div id="${data.id}" class="card m-3" style="width: 275px; height: 500px">
        <h5 class="card-header text-center overflow-hidden">${data.breed}</h5>
        <img src="${data.image}" class="card-img-top" alt="animal" />
        <div class="card-body text-center">
          <p class="card-text h4">Стоимость: ${data.cost} грн</p>
          <a
            href="#"
            class="btn btn-outline-dark"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Узнать больше
          </a>
          <a href="#" class="btn btn-outline-dark">
            <i class="fas fa-shopping-cart"></i>
          </a>
        </div>
        <div class="card-footer text-center">
          <span class="badge bg-danger">${data.gender}</span>
          <span class="badge bg-success">${data.category}</span>
        </div>
      </div>`;
  }

  renderModal(data) {
    return `<div id="${data.id}" class="card m-3" style="width: 275px; height: 500px">
        <h5 class="card-header text-center overflow-hidden">${data.breed}</h5>
        <img src="${data.image}" class="card-img-top" alt="animal" />
        <div class="card-body text-center">
          <p class="card-text h4">Стоимость: ${data.cost} грн</p>
          <a
            href="#"
            class="btn btn-outline-dark"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Узнать больше
          </a>
          <a href="#" class="btn btn-outline-dark">
            <i class="fas fa-shopping-cart"></i>
          </a>
        </div>
        <div class="card-footer text-center">
          <span class="badge bg-danger">${data.gender}</span>
          <span class="badge bg-success">${data.category}</span>
        </div>
      </div>`;
  }

  // document.addEventListener('DOMContentLoaded', function(){ // Аналог $(document).ready(function(){
  //   // Если должен быть найден один элемент
  //   if((e = document.querySelector("#form_error_message_frontend + div > div:last-child label")) !== null)
  //     e.classList.add('last'); // Аналог выборки и присвоения класса
  //   // Если элементов будет много
  //   Array.prototype.forEach.call(document.querySelectorAll("#form_error_message_frontend + div > div:last-child label"), function(e){
  //    e.classList.add('last');
  //   });
  // });
}
