export default class Model {

    async getData() {
        const res = await fetch('https://opensheet.vercel.app/1yh2kVgMDELkBtBYv9WubYVYidXJ3qNLPGiE3GAF_3Fo/sheet1');
        const data = await res.json();
        return data;
    }

    sortByPriceDown(data) {
        const sortedList = data.sort((a, b) => {
            return a.cost - b.cost;
        });
        return sortedList;
    }

    sortByPriceUp(data) {
        const sortedList = data.sort((a, b) => {
            return b.cost - a.cost;
        });
        return sortedList;
    }

    getProductDetails = async ( id ) => {
        const data = await this.getData();
        return data.filter( el => el.id === id)[0];
    }
 }