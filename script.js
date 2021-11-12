import Controller from './product/controller.js';
import ModalController from './modal/modal_controller.js';
import CategoryController from './filterByCategory/category_controller.js';
import PaginationView from './pagination/pagination_view.js';
import PaginController from './pagination/pagination_controller.js';

const showCards = new Controller();
const modalController = new ModalController();
const filterByCategory = new CategoryController();
const paginController = new PaginController();
showCards.init();
//pagination.PaginInit();
//showCards.sendDataPagin();
