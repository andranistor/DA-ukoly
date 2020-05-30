'use strict';
// Úkol 4 - Kostky, pokročilý JS

// 1. Prohlédněte si HTML kód a zapamatujte si, jak se vytváří kostka s danou hodnotou. Poté v HTML ručně vymažte obsah elementu dice-row. Jeho obsah totiž budeme tvořit pomocí JavaScriptu.
// 2. Vytvořte pole dice, které bude obsahovat číselné hodnoty několika kostek, například 5, 1 a 3.
// 3. Napište funkci updateDice, která zobrazí kostky ve vašem poli. To provedete tak, že vyberete element dice-row a pomocí cyklu projdete celé pole kostek. Pro každou hodnotu v cyklu přidáte do innerHTML tohoto elementu jeden obrázek kostky.
// 4. Vyzkoušejte si v konzoli, že vaše funkce funguje. Přidejte do pole kostek novou hodnotu a vyzkoušejte, že po zavolání této funkce se stránka správně aktualizuje.
const dice = [5, 1, 3];
const diceRowElm = document.querySelector('.dice-row');

const updateDice = () => {
  diceRowElm.innerHTML = '';
  for (let i = 0; i < dice.length; i++) {
    diceRowElm.innerHTML += `<img class="dice" src="img/side${dice[i]}.svg" />`
  }
};
updateDice();


// 5. Upravte váš program tak, aby se po stisknutí tlačíka Přidat na stránce objevila nová kostka s nějakou hodnotou. Můžete ji zkusit rovnou vylosovat náhodně.
const btnAddElm = document.querySelector('#btn-add');
const randomNum = () => {
  return Math.floor(Math.random() * 6) + 1;
}

btnAddElm.addEventListener('click', () => {
  dice.push(randomNum());
  updateDice();
});


// 6. Upravte váš program tak, aby se po stisknutí tlačíka Zamíchat náhodně změnily hodnoty na všech kostkách, které jsou právě na stránce zobrazené.
const btnShuffleElm = document.querySelector('#btn-shuffle');

btnShuffleElm.addEventListener('click', () => {
  for (let i = 0; i < dice.length; i++) {
    dice[i] = randomNum();
  }
  updateDice();
})
