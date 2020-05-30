'use strict';

// 1. Vytvořte proměnné hours a minutes. Tyto proměnné budou představovat data vaší aplikace. Nastavte tyto proměnné na nějaký čas, například 12:35.
// 2. Vytvořte funkci updateClock, která zařídí, že na naší stránce se zobrazí čas, který je uložen v těchto proměnných.
// 3. V konzoli prohlížeče zkuste několikrát změnit hodnoty v proměnných hours a minutes. Po každé změně zavolejte funkci updateClock a sledujte, jestli se stránka správně aktualizuje.
// 4. Ve funkci updateClock nezapomeňte zařídit, aby hodiny správně zobrazovaly nulu na začátku jednociferných čísel.
let hours = 2;
let minutes = 5;

const hoursElm = document.querySelector('.clock__hours');
const minutesElm = document.querySelector('.clock__minutes');

const twoDigits = (input) => {
  return input.toString().padStart(2, '0');
};

const updateClock = () => {
  hoursElm.textContent = twoDigits(hours);
  minutesElm.textContent = twoDigits(minutes);
};

updateClock();
