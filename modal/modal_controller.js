import Publisher from '../common/publisher.js';
import ModalModel from './modal_model.js';
import ModalView from './modal_view.js';

export default class ModalController {
  constructor() {
    this.view = new ModalView();
    this.model = new ModalModel();
    Publisher.subscribe(Publisher.events.productId, this.showModal);
  }

  showModal = async (id) => {
    const productDetails = await this.model.getProductDetails(id);
    this.view.displayProductDetails(productDetails);
  };
}
