export default class CategoryView {
    categories = document.querySelectorAll('.category');
    dogTypes = document.querySelectorAll('.dog-type');
    dogsGender = document.querySelectorAll('.dogs-gender');
    catsGender = document.querySelectorAll('.cats-gender');
    catsMadness = document.querySelectorAll('.madness');
    priceDown = document.querySelector('.priceDown');
    priceUp = document.querySelector('.priceUp');
    
    constructor(clickCategories, clickDogTypes, filterByCatsGender, filterByDogsGender, filterCatsByMadness, priceDown, priceUp) {
    this.categories.forEach( el => el.addEventListener('click', clickCategories));
    this.dogTypes.forEach(el => el.addEventListener('click', clickDogTypes));
    this.dogsGender.forEach(el => el.addEventListener('click', filterByDogsGender));
    this.catsGender.forEach(el => el.addEventListener('click', filterByCatsGender));
    this.catsMadness.forEach(el => el.addEventListener('click', filterCatsByMadness));
    this.priceDown.addEventListener('click', priceDown);
    this.priceUp.addEventListener('click', priceUp);
    }
}