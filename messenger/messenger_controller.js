import Publisher from '../common/publisher.js';
import MessengerModel from './messenger_modal.js';

export default class MessengerController {
  constructor() {
    this.model = new MessengerModel();
    Publisher.subscribe(Publisher.events.sendMsgToTG, this.onSendMsg);
  }

  onSendMsg = (msg) => {
    this.model.sendMsg(msg);
  };
}
