import Publisher from '../common/publisher.js';
import MessengerModel from './messenger_model.js';

export default class MessengerController {
  constructor() {
    this.model = new MessengerModel();
    Publisher.subscribe(Publisher.events.sendMsgToTG, this.onSendMsg);
  }

  onSendMsg = async (data) => {
    let dataSend = await data;
    const msg = `
    Здравствуйте, уважаемый ${dataSend.surname} ${dataSend.name}!
    Вы оформили заказ на общую сумму ${dataSend.totPrice} грн.  
    Для подтверждения заказа мы свяжемся с Вами по телефону: ${dataSend.phone} 
    или по электронной почте: ${dataSend.email} 
    `;
    this.model.sendMsg(msg);
  };
}
