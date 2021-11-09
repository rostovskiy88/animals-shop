import ModelM from "../common/modelM.js";

export default class ModalModel extends ModelM {

    getProductDetails = async ( id ) => {
        const data = await this.getData();
        return data.filter( el => el.id === id)[0];
    }
}