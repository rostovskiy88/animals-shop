export default class PaginationView {

  constructor(sendLearnMoreBtnsId, sendCartBtnId) {
    this.list_element = document.getElementById('list');
    this.pagination_element = document.getElementById('pagination');
    this.current_page = 1;
    this.rows = 9;
    this.sendLearnMoreBtnsId = sendLearnMoreBtnsId;
    this.sendCartBtnId = sendCartBtnId;
  }

  SetupPagination(items, wrapper, rows_per_page) {
    wrapper.innerHTML = '';

    let page_count = Math.ceil(items.length / rows_per_page);
    for (let i = 1; i < page_count + 1; i++) {
      let btn = this.PaginationButton(i, items);
      wrapper.appendChild(btn);
    }
  }

  PaginationButton(page, items) {
    let button = document.createElement('button');
    button.innerText = page;

    if (this.current_page == page) button.classList.add('active');

    button.addEventListener('click', () => {
      this.current_page = page;
      this.DisplayList(items, this.list_element, this.rows, this.current_page);

      let current_btn = document.querySelector('.pagenumbers button.active');
      current_btn.classList.remove('active');

      button.classList.add('active');
    });

    return button;
  }

  DisplayList(items, wrapper, rows_per_page, page) {
    wrapper.innerHTML = '';
    page--;

    let start = rows_per_page * page;
    let end = start + rows_per_page;
    let paginatedItems = items.slice(start, end);

    for (let i = 0; i < paginatedItems.length; i++) {
      let item = paginatedItems[i];
      let item_element = document.createElement('div');
      item_element.innerHTML = item;
      wrapper.append(item_element);
    }
    this.getAllLearnMoreBtns();
    this.getAllCartBtns();
  }
  
  getAllLearnMoreBtns() {
    this.learnMoreBtns = document.querySelectorAll('.learn-more-btn');
    this.learnMoreBtns.forEach((btn) => btn.addEventListener('click', this.sendLearnMoreBtnsId));
  }

  getAllCartBtns() {
    this.cartBtns = document.querySelectorAll('.cart-btn');
    this.cartBtns.forEach((btn) => btn.addEventListener('click', this.sendCartBtnId));
  }

  getId = (event) => {
    const id = event.target.attributes['data-id'].value;
    return id;
  };
}
