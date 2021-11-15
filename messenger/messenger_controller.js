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
    Внимание! ${dataSend.surname} ${
      dataSend.name
    } оформил(а) заказ в количестве ${
      dataSend.totCount.length
    } наименований на общую сумму ${dataSend.totPrice} грн.
    Породы, которые были выбраны: ${breed.join(', ')} 
    Для подтверждения заказа свяжитесь с Клиентом по телефону: ${
      dataSend.phone
    } 
    или по электронной почте: ${dataSend.email} 
    `;
    this.model.sendMsg(msg);
  };
}
