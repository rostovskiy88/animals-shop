export default class View {
  priceDown = document.querySelector('.priceDown');
  priceUp = document.querySelector('.priceUp');
  cardsContainer = document.querySelector('.cards');
  searchInput = document.querySelector('#search-input');

  constructor(onPriceDown, onPriceUp, listenToClick, changeSearch) {
    this.priceDown.addEventListener('click', onPriceDown);
    this.priceUp.addEventListener('click', onPriceUp);
    this.searchInput.addEventListener('change', changeSearch);
    this.listenToClick = listenToClick;
  }

  getSearchData() {
    console.log(this.searchInput.value);
    return this.searchInput.value;
  }

  renderList = (list) => {
    const listHTML = list.map(this.renderCard);
    const joinList = listHTML.join('');
    this.cardsContainer.innerHTML = joinList;
    this.getAllBtns();
  };

  getAllBtns() {
    const learnMoreBtns = document.querySelectorAll('.learn-more-btn');
    learnMoreBtns.forEach((btn) =>
      btn.addEventListener('click', this.listenToClick)
    );
  }

  getId = (event) => {
    const id = event.target.attributes['data-id'].value;
    return id;
  };

  renderCard = (data) => {
    return `
        <div class="card m-3" style="width: 275px; height: 500px">
        <h5 class="card-header text-center">${data.breed}</h5>
        <img src=${data.image} class="card-img-top animal-image" style="object-fit: contain" alt="Animal">
        <div class="card-body text-center d-flex flex-column justify-content-end">
          <p class="card-text h5 price">Стоимость: ${data.cost} UAH</p>
          <div>
          <a href="#" class="btn btn-outline-dark learn-more-btn" data-id="${data.id}"">Узнать больше</a>
          <a href="#" class="btn btn-outline-dark"><i class="fas fa-shopping-cart"></i></a>
          </div>
        </div>
        <div class="card-footer text-center">
          <span class="badge bg-danger gender">${data.gender}</span>
          <span class="badge bg-success animal-type">${data.category}</span>
        </div>
      </div>`;
  };
}
