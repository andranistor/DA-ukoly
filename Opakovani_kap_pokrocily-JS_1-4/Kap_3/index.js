'use strict';

// Úkol 1 - Svátek zítra
// Zatím jsme z API pro získávání svátků viděli endpointy /today a /getdate. Existují však ještě další.
// Napište aplikaci, která uživateli zobrazí, kdo má svátek zítra. K tomu použíjte endpoint /tomorrow, který funguje podobně jako endpoint /today.
fetch('https://api.abalin.net/tomorrow?country=cz')
  .then((resp) => resp.json())
  .then((json) => console.log(json.data.namedays.cz));


// Úkol 2 - Svátek v den
// Dalším užitečným endpointem API pro svátky je /namedays. Ten nám umožňuje zjistit, kdo má svátek v přesně určený den. Tento endpoint má tři povinné parametry: country, month a day. Takto například zjistíme, kdo má v Česku svátek 13. února.
// https://api.abalin.net/namedays?country=cz&month=2&day=13
// Vytvořte aplikaci, které bude obsahovat dvě textová políčka a tlačítko. Uživatel do políček zadá číslo dne a číslo měsíce a po stisknutí tlačítka se mu na stránce zobrazí, kdo má tento den svátek.

const btnElm = document.querySelector('#btn');

btnElm.addEventListener('click', () => {
  const dateDayElm = document.querySelector('#day').value;
  const dateMonthElm = document.querySelector('#month').value;
  const nameDayOutputElm = document.querySelector('.nameday__output');

  fetch(`https://api.abalin.net/namedays?country=cz&month=${dateMonthElm}&day=${dateDayElm}`)
    .then((resp) => resp.json())
    .then((json) => nameDayOutputElm.textContent = json.data.namedays.cz);
});
