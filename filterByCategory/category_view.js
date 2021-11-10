export default class CategoryView {
    categories = document.querySelectorAll('.category');
    
    constructor(listenToClick) {
    console.log(this.categories);
    this.categories.forEach( el => el.addEventListener('click', listenToClick));
    }
}