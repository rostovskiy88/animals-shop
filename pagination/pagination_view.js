//import ModelM from '../common/modelM.js';
import Model from '../product/model.js';
import View from '../product/view.js';

export default class PaginationView {
  constructor() {
    this.view = new View();
    this.model = new Model();
    this.list_element = document.getElementById('list');
    this.pagination_element = document.getElementById('pagination');
    this.current_page = 1;
    this.rows = 9;
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
      //item_element.classList.add('item');
      item_element.innerText = item;

      wrapper.append(item_element);
    }
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

  PaginInit = async (data) => {
    const data_el = await data;
    console.log(data_el);
    //this.view.renderList(data_el);
    let fu = this.view.renderList(data_el);
    this.DisplayList(fu, this.list_element, this.rows, this.current_page);
    this.SetupPagination(fu, this.pagination_element, this.rows);
  };
}
