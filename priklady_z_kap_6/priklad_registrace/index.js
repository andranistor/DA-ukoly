'use strict';
// Úkol 9 - Registrace
// Registrační formulář pro nového uživatele
// 1. Pokud uživatel zadá uživatelské jméno, které je již obsaženo v poli users, vypište do prvku s třídou reg-form__error chybovou hlášku ve smyslu, že zadané uživatelské jméno je již zabráno.
// 2. Zkontrolujte, že heslo zadané do prvního políčka je dostatečně bezpečené. Heslo považujeme za bezpečné, pokud má alespoň 10 znaků nebo obsahuje alespoň jeden ze znaků pomlčka -, podtržítko _ nebo dvojtečka :.


const users = [
  'petr',
  'jana-34',
  'husky16',
  '66beruska',
  'thegodofU',
  'rene_gade',
  'tommy',
  'luciluci',
  'tanko',
  'poltergeist',
  'hlava-havla',
  'telo-ramba'
];

const userNameElm = document.querySelector('#username');
const errorNameElm = document.querySelector('.reg-form__error');
const pass1Elm = document.querySelector('#pass1');
const pass2Elm = document.querySelector('#pass2');

// Fce, ktera uzivateli vypise, zda jeho uzivatelske jmeno jiz neni zabrane, tzn. ze nachazi v poli users
const compareName = () => {
  for (let i = 0; i < users.length; i++) {
    if (userNameElm.value === users[i]) {
      errorNameElm.textContent = 'Zadané uživatelské jméno je již zabráno.';
      break;
    } else {
      errorNameElm.textContent = '';
    }
  }
};

userNameElm.addEventListener('keyup', compareName); // cyklus je spuštěn po každém zadaném písmenku

// Alternativa, která hlášku vypíše, až potom, co uživatel klikne, nebo tabulátorem přejde mimo políčko:
// userNameElm.addEventListener('change', compareName);


// Fce, ktere vypise, zda je heslo dostatecne bezpecne
const passSec = () => {
  if (pass1Elm.value.length >= 10 || pass1Elm.value.includes('-') || pass1Elm.value.includes('_') || pass1Elm.value.includes(':')) {
    errorNameElm.style.color = 'green';
    errorNameElm.textContent = 'Heslo je bezpečné.';
  } else {
    errorNameElm.style.color = 'red';
    errorNameElm.textContent = 'Vaše heslo není bezpečné. Musí obsahovat alespoň 10 znaků nebo alespoň jeden ze znaků pomlčka -, podtržítko _ nebo dvojtečka :'
  }
};

pass1Elm.addEventListener('change', passSec);


// Fce, ktere vypise, ze jsou zadana hesla ruzna
const passCompare = () => {
  if (pass1Elm.value !== pass2Elm.value) {
    errorNameElm.style.color = 'red';
    errorNameElm.textContent = 'Zadaná hesla nejsou shodná.';
  } else {
    errorNameElm.textContent = '';
  }
};

pass2Elm.addEventListener('change', passCompare);