export default class AgeView {

    catsAgeOutput = document.querySelector('.cats-age');
    dogsAgeOutput = document.querySelector('.dogs-age');
    rodentsAgeOutput = document.querySelector('.rodents-age');
    catsRange = document.querySelector('.cats-age-range');
    dogsRange = document.querySelector('.dogs-age-range');
    rodentsRange = document.querySelector('.rodents-age-range');

    constructor(sortByAge) {
        this.catsRange.addEventListener('change', sortByAge);
        this.dogsRange.addEventListener('change', sortByAge);
        this.rodentsRange.addEventListener('change', sortByAge);
    }
    
    renderAge = (category, value) => {
        const word = this.checkValue(value);
        let output = '';
        if (value == 0) {
            output = word;
        } else {
            output = value + word;
        }
        if (category === 'кот') {
            this.catsAgeOutput.textContent = output;
        } else if (category === 'собака') {
            this.dogsAgeOutput.textContent = output;
        } else {
            this.rodentsAgeOutput.textContent = output;
        }
    }

    checkValue(value) {
        let word = '';
        if (value == 0) {
            word = ' До года';
        } else if (value == 1) {
            word = ' год';
        } else if (value == 2 || value == 3 || value == 4) {
            word = ' года';
        } else {
            word = ' лет';
        }
        return word;
    }
}