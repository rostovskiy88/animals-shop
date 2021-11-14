import Controller from './product/controller.js';
import ModalController from './modal/modal_controller.js';
import CategoryController from './filterByCategory/category_controller.js';
import AgeController from './filterByAge/age_controller.js';
import PaginController from './pagination/pagination_controller.js';
import CartController from './cart/cart_controller.js';

const paginController = new PaginController();
const showCards = new Controller();
const modalController = new ModalController();
const filterByCategory = new CategoryController();
const filterByAge = new AgeController();
const cart = new CartController();
showCards.init();

// DISPLAYING STARS
const madness = document.querySelectorAll('.madness');
madness.forEach((star, idx) => {
  star.addEventListener('click', () => {
    highlightStars(idx);
  });
});

function highlightStars(idx) {
  if (
    madness[idx].classList.contains('fas') &&
    !madness[idx].nextElementSibling.classList.contains('fas')
  ) {
    idx--;
  }

  madness.forEach((star, idx2) => {
    if (idx2 <= idx) {
      star.classList.remove('far');
      star.classList.add('fas');
    } else {
      star.classList.remove('fas');
      star.classList.add('far');
    }
  });
}

// POPOVER
let popover = new bootstrap.Popover(
  document.querySelector('.popover-dismiss'),
  {
    trigger: 'focus',
  }
);
