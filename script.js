const catsAgeOutput = document.querySelector('.cats-age');
const dogsAgeOutput = document.querySelector('.dogs-age');
const rodentsAgeOutput = document.querySelector('.rodents-age');
const catsRange = document.querySelector('.cats-age-range');
const dogsRange = document.querySelector('.dogs-age-range');
const rodentsRange = document.querySelector('.rodents-age-range');

function checkAge(age) {
  let ageOut = '';
  if (age > 24) {
    ageOut = Math.floor(age / 12) + ',' + (age % 12) + ' лет';
  } else {
    ageOut = age + ' месяцев';
  }
  return ageOut;
}

function displayAge(range, output) {
  output.textContent = checkAge(range.value);
  console.log(range.value);
}

catsRange.addEventListener('change', () => {
  displayAge(catsRange, catsAgeOutput);
});
dogsRange.addEventListener('change', () => {
  displayAge(dogsRange, dogsAgeOutput);
});
rodentsRange.addEventListener('change', () => {
  displayAge(rodentsRange, rodentsAgeOutput);
});
