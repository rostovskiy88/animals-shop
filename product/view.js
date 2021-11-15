export default class View {
  
  searchInput = document.querySelector('#search-input');

  constructor(changeSearch) {
    this.searchInput.addEventListener('change', changeSearch);
  }

  getSearchData() {
    console.log(this.searchInput.value);
    return this.searchInput.value;
  }

  renderList = (list) => {
    const listHTML = list.map(this.renderCard);
    return listHTML;
  };

  renderCard = (data) => {
    return `
        <div class="card m-3 border-2 border-dark" style="width: 275px; height: 500px">
        <h5 class="card-header text-center border-dark">${data.breed}</h5>
        <img src=${data.image} class="card-img-top animal-image" style="object-fit: contain" alt="Animal">
        <div class="card-body text-center d-flex flex-column justify-content-end">
          <p class="card-text h5 price">Стоимость: ${data.cost} UAH</p>
          <div>
          <a href="#" class="btn btn-outline-dark learn-more-btn" data-id="${data.id}">Узнать больше</a>
          <i class="fas fa-shopping-cart btn btn-outline-dark cart-btn" data-id="${data.id}"></i>
          </div>
        </div>
        <div class="card-footer text-center border-dark">
          <span class="badge bg-danger gender">${data.gender}</span>
          <span class="badge bg-success animal-type">${data.category}</span>
        </div>
      </div>`;
  };
}
