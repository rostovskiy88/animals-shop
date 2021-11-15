import Publisher from '../common/publisher.js';
import MessengerModel from './messenger_model.js';

export default class MessengerController {
  constructor() {
    this.model = new MessengerModel();
    Publisher.subscribe(Publisher.events.sendMsgToTG, this.onSendMsg);
  }

  onSendMsg = async (data) => {
    let dataSend = await data;
    const breed = [];
    for (let i = 0; i < dataSend.totCount.length; i++) {
      breed.push(dataSend.totCount[i].breed);
    }

    const msg = `
    Здравствуйте, ${dataSend.surname} ${dataSend.name}!
    Вы оформили заказ в количестве ${
      dataSend.totCount.length
    } наименований на общую сумму ${dataSend.totPrice} грн.
    Породы, которые вы выбрали: ${breed.join(', ')} 
    Для подтверждения заказа мы свяжемся с Вами по телефону: ${dataSend.phone} 
    или по электронной почте: ${dataSend.email} 
    `;
    this.model.sendMsg(msg);
  };
}
