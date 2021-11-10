export default class Publisher {
    static listeners = {};

    static subscribe(name, listener) {
        if (!this.listeners[name]) {
            this.listeners[name] = [];
        }
        this.listeners[name].push(listener);
    }

    static notify(name, data) {
        if (!this.listeners[name]) {
            this.listeners[name] = [];
        }
        this.listeners[name].forEach(fn => fn(data));
    }

    static events = {
        productId: 'GET PRODUCT ID',
        productsCategory: 'GET CATEGORY OF THE PRODUCT',
    }
}