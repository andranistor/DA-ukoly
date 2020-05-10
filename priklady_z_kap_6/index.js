'use strict';
// Úkol 1 - Pole v divadle (Celé toto cvičení prováďejte v JavaScript konzoli.)
// 1. Vytvořte nějaké pole celých čísel, například počty diváků na několika po sobě jdoucích divadelních představeních. Použije metodu push a přidejte do pole počet diváků na novém představení.
const attendees = [50, 80, 45, 100, 60, 70];
attendees.push(55);
// console.log(attendees);


// 2. Vytvořte nějaké pole desetinných čísel, například zaplněnost divadla v několika po sobě jdoucích představeních.
const capacity = [0.5, 0.8, 0.45, 1.0, 0.6, 0.7, 0.55];
// console.log(capacity);


// 3. Vytvořte nějaké pole řetězců, například seznam názvů několika divadelních představení, která divadlo hraje. Uložte tento seznam do proměnné plays. Uložte do nějaké proměnné druhou položku tohoto pole. Pomocí metody shift odstraňte z pole první představení, které už divadlo nehraje.
const plays = ['Jak se Vám líbí', 'Labutí jezero', 'Liška bystrouška', 'Její pastorkyňa', 'Mnoho povyku pro nic'];
const play2 = plays[1];
// console.log(play2);

plays.shift(0);
// console.log(plays);


// 4. Do proměnné reviews uložte pole hodnocení, které obdržela divadelní hra Plyšáci na útěku v různých recenzních časopisech. Hodnocení je vždy dvouprvkové pole obsahující název recenzního časopisu jako řetězec a samotné hodnocení jako číslo mezi 1 až 10. Pomocí metody unshift přidejte na začátek nové hodnocení z časopisu Divadelní oběžník.
const reviews = [['Divadelni review', 7], ['Co večer?', 6], ['Pojďte s námi do divadla', 9], ['Review divadelních her', 7]];
reviews.unshift(['Divadelní oběžník', 8]);
// console.log(reviews);



//---------------------------------------//
//---------------------------------------//
// Úkol 2 - Šachovnice
// Založte JavaScriptový program a vytvořte v něm pole, které bude reprezentavat rozehranou šachovou partii jako na obrázku.
// 1. Šachovnici reprezentujte jako pole polí, kde každý řádek je reprezentován jako jedno pole. Políčka reprerezentujte jako čísla dle následujícího klíče.
// 0 - prázné políčko
// 1 - pěšec
// 2 - věž
// 3 - kůň
// 4 - střelec
// 5 - dáma
// 6 - král

const chess = [
  [0, 0, 0, 0, 0, 2, 6, 0],
  [0, 0, 0, 0, 0, 1, 1, 1],
  [0, 0, 1, 0, 1, 0, 0, 0],
  [0, 1, 1, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 2, 0, 1],
  [0, 0, 0, 0, 4, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 6, 0],
];
// console.log(chess);

// 2. Otevřete tento program v konzoli a napište příkaz, který přesune bílého koně z pozice f3 na pozici e5.
// const move = chess; // Tento zapis pouze odkazuje na puvodni pole, jedna se o referenci. Pokud si chceme zobrazit v konzoli i puvodni pole, je potreba zkopirovat puvodni pole do noveho pole.
let move = [];

for (let i = 0; i < chess.length; i++) {
  move.push([...chess[i]]); // zkopiruje puvodni pole do noveho pole jmenem move
  // alternativa: move.push(chess[i].slice());
};
move[5][5] = 0;
move[3][4] = 2;
// console.log(move);


//---------------------------------------//
//---------------------------------------//
// Úkol 3 - Sudá čísla
// Napište cyklus WHILE, který vypíše do konzole prvních deset sudých čísel počínaje nulou.
let i = 0;
let num = 0;

while (i < 10) {
  // console.log(num);
  i++;
  num += 2;
};


// Přepište váš kód jako cyklus FOR.
let num1 = 0;
for (let i = 0; i < 10; i++) {
  // console.log(num1);
  num1 += 2
};

// Vypište sudá čísla pozpátku, tedy tak, abychom nulou skončili.
let num2 = 20;
for (let i = 0; i < 10; i++) {
  num2 -= 2
  // console.log(num2);
};

// alternativa:
for (let i = 18; i >= 0; i -= 2) {
  // console.log(i);
}

// alternativa:
let i1 = 18;
while (i1 >= 0) {
  // console.log(i1);
  i1 -= 2;
};



//---------------------------------------//
//---------------------------------------//
// Úkol 4 - Uživatelé
// Založte JavaScriptový program s následujícím seznamem uživatelů.
// const users = ['paja', 'kaja', 'vlasta', 'peta', 'alex', 'misa'];

// 1. Pomocí cyklu FOR vypište všechna tato jména do konzole.
const users = ['paja', 'kaja', 'vlasta', 'peta', 'alex', 'misa'];
for (let i = 0; i < users.length; i++) {
  // console.log(users[i]);
};

// 2. Do konzole vypište všechna jména jako emailové adresy z domény gmail.com. Uživatel ‘paja’ tak bude ‘paja@gmail.com’.
for (let i = 0; i < users.length; i++) {
  // console.log(users[i] + '@gmail.com');
};

// 3. Vypište do konzole emaily pouze těch uživatelů, jejichž jméno má nejvýše 4 znaky.
for (let i = 0; i < users.length; i++) {
  if (users[i].length <= 4) {
    // console.log(users[i] + '@gmail.com');
  };
};



//---------------------------------------//
//---------------------------------------//
// Úkol 5 - Pohyby na účtu
// Založte JavaScriptový program s následujícím s záznamem vkladů a výběrů na nějakém bankovním účtu.
// const amounts = [2500, -550, 1000, -1200, -3000, 1270, 2300];

// 1. Napište cyklus FOR, který spočítá výsledný zůstatek na účtu za předpokladu, že na účtu byla na začátku nula.
const amounts = [2500, -550, 1000, -1200, -3000, 1270, 2300];
let balance = 0;

for (let i = 0; i < amounts.length; i++) {
  balance += amounts[i];
};
// console.log(balance);

// 2. Napište cyklus WHILE, který zjistí číslo pohybu, ve kterém se účet dostal poprvé do mínusu. Vypište jak číslo pohybu, tak výši záporného zůstatku.
let start = 0;
let inMinus = 0;
let movementNumber = 0;
let i2 = 0;

while (i2 < amounts.length) {
  start += amounts[i2];
  i2++;
  if (start < 0) {
    inMinus = start;
    movementNumber = i2;
  };
};
// console.log(inMinus);
// console.log(movementNumber);
// Vypíše to číslo pohybu, jak jsme zvyklí v běžném životě. Pokud bychom chtěli vypsat index z pole, tak by stačilo i2++ dát za IF podmínkou.



//---------------------------------------//
//---------------------------------------//
// Úkol 6 - Čekání na šestku
// 1. Napište funkci roll, která simuluje hod kostkou. Vrátí tedy náhodné číslo od 1 do 6 tak, že všechna čísla mají stejnou pravděpodobnost.
// 2. Váš program nechť hází kostkou tak dlouho, až poprvé padne šestka. Vypište na výstup na kolikátý pokus šestka padla.
// 3. Spusťte váš program desetkrát za sebou a zaznamenejte výsledky. Sdílejte vaše výsledky s ostatními abychom nasbírali co nejvíce dat.

let roll = () => {
  return Math.floor(Math.random() * 6) + 1;
};
let i3 = 1;

while (i3 < 20) {
  roll()[i3];
  let side = roll();
  if (side === 6) {
    // console.log('6 - padla šestka!');
    // console.log('Šestka padla na ' + i3 + '. pokus');
    break; // Zastaví cyklus, pokud bude splněna podmínka, tj. že padne šestka.
  }
  // console.log(side);
  i3++;
};
// Pro další hod kostkou je třeba aktualizovat prohlížeč (F5).



//---------------------------------------//
//---------------------------------------//
// Úkol 7 - Malé algoritmy
// Seznam čísel, který se bude používat ve všech následujících úlohách.
let numbers = [
  -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5
];

// 1. úkol: Vypište na výstup všechna čísla.
for (let i = 0; i < numbers.length; i++) {
  // console.log(numbers[i]);
};


// 2. úkol: Vypište na výstup druhé mocniny všech čísel.
for (let i = 0; i < numbers.length; i++) {
  // console.log(numbers[i] ** 2);
};


// 3. úkol: Vypište na výstup pouze záporná čísla.
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < 0) {
    // console.log(numbers[i]);
  };
};


// 4. úkol: Vypište na výstup absolutní hodnotu všech čísel.
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < 0) {
    // console.log(numbers[i] * -1);
  };
  if (numbers[i] > 0) {
    // console.log(numbers[i]);
  };
};


// 5. úkol: Vypište na výstup pouze ta čísla, jejíchž (absolutní) hodnota je dělitelná třemi.
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 3 === 0) {
    // console.log(numbers[i]);
  };
};


// 6. úkol: Vypište na výstup pouze sudá čísla.
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    // console.log(numbers[i]);
  };
};


// 7. úkol: Vypište na výstup jak daleko je každé číslo v seznamu od čísla 5.
for (let i = 0; i < numbers.length; i++) {
  // console.log(numbers.indexOf(5) - [i]);
};


// 8. úkol: Vypište na výstup druhé mocnicny vzdáleností všech čísel od čísla 5.
for (let i = 0; i < numbers.length; i++) {
  // console.log((numbers.indexOf(5) - [i]) ** 2);
};


// 9. úkol: Spočítejte, kolik je v seznamu záporných čísel.
let countNegative = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < 0) {
    countNegative++;
  };
};
// console.log(countNegative + ' záporných čísel.');


// 10. úkol: Spočítejte součet všech čísel v poli.
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
};
// console.log(sum);



// 11. úkol: Spočítejte průměr všech čísel v poli.
let sum1 = 0;
let countNumber = numbers.length - 1;

for (let i = 0; i < numbers.length; i++) {
  sum1 += numbers[i];
};
let average = Math.round(sum1 / countNumber);
// console.log(average);


// 12. úkol: Spočítejte součet všech pozitivních čísel v poli.
let sumPositive = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    sumPositive += numbers[i];
  };
};
// console.log(sumPositive);


//---------------------------------------//
//---------------------------------------//
// Úkol 12 - Těžší algoritmy
// 1. úkol: Vypište na výstup všechna čísla, která jsou větší než jejich předchůdce.
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > numbers[i - 1]) {
    // console.log(numbers[i]);
  };
};

// 2. úkol: Vypište na výstup všechny vrcholy v daném poli. Vrchol je číslo, které je větší než jeho předchůdce i jeho následovník.
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > numbers[i - 1] && numbers[i] > numbers[i + 1]) {
    // console.log(numbers[i]);
  };
};


// 3. úkol: Nejprve spočítejte průměr čísel v poli a výsledek si ulože do proměnné mean. Poté spočítejte součet druhých mocnin vzdáleností všech čísel od průměru.
// Výpočet průměru
let mean = average; // řešeno v úkolu 11

// Součet druhých mocnin vzdáleností všech čísel od průměru
let sum5 = 0;

for (let i = 0; i < numbers.length; i++) {
  sum5 += (numbers[i] - mean) ** 2;
};
// console.log(sum5);


// 4. úkol: Spočítejte směrodatnou odchylku čísel v poli.To provedete tak, že nejprve spočítáte takzvaný rozptyl, což je průměr druhých mocnin vzdáleností všech čísel od průměru.Rozptyl pak odmocníte pomocí funkce Math.sqrt.
let variance = sum5 / countNumber;
let std = Math.sqrt(variance); // std = směrodatná odchylka
// console.log(std);


// 5. úkol: Najděte s seznamu největší prvek.
// alternativa:
// let maxNum = Math.max(...numbers);
// console.log(maxNum);

let maxNum = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > maxNum) {
    maxNum = numbers[i];
  };
};
// console.log(maxNum);


// 6. úkol: Najděte v seznamu největší prvek, který je menší než číslo 16.
let numPole = [];
let num16Max = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < 16) {
    numPole.push(numbers[i]);
    num16Max = Math.max(...numPole);
  };
};
// console.log(num16Max);



//---------------------------------------//
//---------------------------------------//
// Úkol 13 - Algoritmy pro fajnšmekry
// 1. úkol: Vypište na výstup délku nejdelší rostoucí sekvence čísel, které v poli následují přímo po sobě.
let length = 1;
let maxLength = 1;

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > numbers[i - 1]) {
    length++;
    if (length > maxLength) {
      maxLength = length;
    }
  } else {
    length = 1;
  }
};
// console.log(maxLength);


// 2. úkol: Vypište na výstup délku nejdelší rostoucí nebo klesající sekvence čísel, které v seznamu následují přímo po sobě.
let lengthUp = 1;
let lengthDown = 1;

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > numbers[i - 1]) {
    lengthUp++;
    lengthDown = 1;
    // console.log(lengthUp + ' rostouci');
    if (lengthUp > maxLength) {
      maxLength = lengthUp;
    }
  } else if (numbers[i] < numbers[i - 1]) {
    lengthUp = 1;
    lengthDown++;
    // console.log(lengthDown + ' klesajici');
    if (lengthDown > maxLength) {
      maxLength = lengthDown;
    }
  } else {
    lengthUp = 1;
    lengthDown = 1;
  }
};
// console.log(maxLength);


// 3. úkol: Najděte druhý největší prvek v seznamu.
let max1 = [];
let secMax = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < maxNum) {
    max1.push(numbers[i]);
    secMax = Math.max(...max1);
  };
};
// console.log(secMax);

// Alternativa pomoci .splice() metody, která odebere prvek z pole.
// Pokud si chceme zachovat původní pole, je potřeba pracovat s kopírovaným polem, zde numbers1
let numbers1 = [...numbers];
numbers1.splice(numbers1.indexOf(maxNum), 1);
let secMax1 = Math.max(...numbers1);
// console.log(secMax1);



// 4. úkol: Najděte nejnižší vrchol a nejvyšší údolí. Údolí je číslo, které je menší než jeho předchůdce i následovník.
// Vrchol:
let min1 = [];
let minVrch = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > numbers[i - 1] && numbers[i] > numbers[i + 1]) {
    min1.push(numbers[i]);
    minVrch = Math.min(...min1);
  };
};
// console.log(minVrch);

// Údolí:
let max2 = [];
let maxUdoli = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < numbers[i - 1] && numbers[i] < numbers[i + 1]) {
    max2.push(numbers[i]);
    maxUdoli = Math.max(...max2);
  };
};
// console.log(maxUdoli);



//---------------------------------------//
//---------------------------------------//
// Úkol 10 - Skalární součin
// Vaším úkolem je napsat funkci, která dělá takzvaný skalární součin dvou polí. Mějme dvě stejně dlouhá pole čísel arr1 a arr2. Skalární součin se spočítá tak, že vynásobíme první prvek pole arr1 s prvním prvkem pole arr2. Poté vynásobíme druhý prvek pole arr1 druhým prvkem pole arr2. Takto vynásobíme všechny dvojice čísel na odpovídajících indexech. Všechny výsledky pak sečteme dohromady.
// Mějme například tato dvě pole.
// const arr1 = [2, -1, 0, 3];
// const arr2 = [3, 2, 8, 1];
// Jejich skalární součin bychom ručně spočetli takto:
// > 2*3 + (-1)*2 + 0*8 + 3*1
// 7
// Napište funkci dotProduct, která jako svoje vstupy dostane dvě stejně dlouhá pole a vrátí jejich skalární součin.
// > const arr1 = [2, -1, 0, 3];
// > const arr2 = [3, 2, 8, 1];
// > dotProduct(arr1, arr2)
// 7
// Vyzkoušejte si na vícero příkladech a polích různých délek, že vaše funkce opravdu spolehlivě funguje. Pokud budete chtít dokončit hru piškvorky, budete ji potřebovat.

let product = 0;

const dotProduct = (arr1, arr2) => {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      product += arr1[i] * arr2[i];
    };
    return product;
  }
  return false;
};

const arr11 = [2, -1, 0, 3];
const arr21 = [3, 2, 8, 1];
// console.log(dotProduct(arr11, arr21));