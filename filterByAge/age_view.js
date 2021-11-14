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
        if (category === 'кот') {
            this.catsAgeOutput.textContent = `${value} ${word}`;
        } else if (category === 'собака') {
            this.dogsAgeOutput.textContent = `${value} ${word}`;
        } else {
            this.rodentsAgeOutput.textContent = `${value} ${word}`;
        }
    }

    checkValue(value) {
        let word = '';
        if (value == 1) {
            word = ' год';
        } else if (value == 2 || value == 3 || value == 4) {
            word = ' года';
        } else {
            word = ' лет';
        }
        return word;
    }
}