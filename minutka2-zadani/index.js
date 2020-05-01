'use strict';
// Zadání úkolu Minutka (1), 2 a 3
// Umožněte uživateli zadat počet vteřin skrze připravené textové poličko. K získání hodnoty z políčka použijte vlastnost value. Nezapomeňte obsah políčka zkonvertovat na číslo. Minutku spusťte tlačítkem Start.
// Zařiďte, aby minutka správně odpočítávala vteřiny a začala zvonit ve chvíli, kdy dosáhne nuly. Pokud si věříte, zkuste celý program napsat rovnou bez nápovědy. Pokud malinko ztrácíte půdu pod nohama, následujte tyto kroky.
// 1. Vytvořte si proměnou time, do které uložíte počáteční počet vteřin zadaný uživatelem.
// 2. Při kliknutí na Start nastavte časovač pomocí setInterval. Ten se bude opakovat každou vteřinu a pokaždé sníží hodnotu v proměnné time o jedna.
// 3. Jakmile proměnná time dosáhne nuly, zapněte zvonění a zrušte časovač aby nezačal počítat do mínusu.
// 4. Vylepšete program naší kuchyňské minutky tak, aby zobrazovala nejen vteřiny, ale i minuty. Layout stránky je na to připraven. Nechejte uživatele zadat minuty, nikoliv vteřiny, a správně odpočítávejte čas až k nule.
// Dejte pozor na správné formátování, kdy jednociferné hodnoty je zvykem zobrazovat s nulou na začátku. Vytvořte si funkci twoDigits, která na vstupu dostane číslo a vrátí řetězec správně naformátovaný na dvě cifry.


// RESENI ------------
// Ošetření, aby se fce při běhu znovu nespouštěla při klikání na btn nebo na Enter
let canRun = true;

// Funkce časovače, která se spustí po zadání vstupu a následné události kliknutí na btn nebo zmáčknutím Enter
const start = () => {

  // Input od uživatele v minutách
  let time = Number(document.querySelector('.time-input').value);
  // Ošetření, že se fce spustí jen když uživatel zadá celé číslo, s omezením na 24 h
  if (isNaN(time) || time === 0 || Number.isInteger(time) === false || time > 1440) {
    return alert('Zadejte prosím celé číslo, <= 1 440 (= 24 h)');
  };
  // Spustí se odpočet
  canRun = false;

  let sec = time * 60; // Přepočet inputu z minut na sekundy
  // Po spuštení fce se zobrazí čas o sekundu menší, od kterého začne počítat odbíhající čas, např. místo 3 se zobrazí 2:59, tj. sekundy počítáme od 59 s
  const minDigits = document.querySelector('.alarm__minutes');
  const secDigits = document.querySelector('.alarm__seconds');
  minDigits.textContent = twoDigits(time -= 1);
  secDigits.textContent = twoDigits((sec -= 1) % 60);

  // Časovač pro minuty
  const timer = setInterval(() => {
    minDigits.textContent = twoDigits(time -= 1);
  }, 60000);

  // Časovač pro sekundy
  const timerSec = setInterval(() => {
    secDigits.textContent = twoDigits((sec -= 1) % 60);
  }, 1000);

  // Zastavení časovače-setIntervalu pro sekundy
  // (time + 1) * 60000 - 1000) = pro účely zobrazení začínáme s minutou o hodnotu 1 nižší, a zároveň (- 1000), protože začínáme sekundy počítat od 59 (nikoli od 0)
  setTimeout(() => {
    clearTimeout(timerSec);
  }, (time + 1) * 60000 - 1000);

  // Zastavení časovače-setIntervalu pro minuty
  setTimeout(() => {
    clearTimeout(timer);
  }, (time + 1) * 60000 - 1000);

  // Spouštění zvuku po uplynutí zadané doby a znovu aktivování tlačítka Start
  setTimeout(() => {
    document.querySelector('.alarm').classList.add('alarm--ring');
    document.querySelector('audio').play();
    canRun = true; // Fce je znovu spustitelná
  }, (time + 1) * 60000 - 1000);
}

// Po události klik nebo Enter se volá fce start v závislosti na tom, jestli už běží nebo ne (canRun)
document.querySelector('button').addEventListener('click', (event) => {
  if (canRun === true) {
    start();
  }
});
document.querySelector('.time-input').addEventListener('keyup', (event) => {
  if (event.keyCode === 13 && canRun === true) {
    start();
  }
}
);

// Fce, která vrací dvouciferný zápis pro čísla menší než 10, v ostatních případech vrací zapsané číslo ve formě string
let twoDigits = (x) => {
  if (x < 10) {
    return '0' + x;
  } return String(x);
};
