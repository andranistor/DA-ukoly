'use strict';

// Úkol 1 - Práce s objekty - základy
const person = {
  name: "Karel",
  age: 27,
  "favorite color": "yellow"
};

// 1. Vypište do konzole jméno osoby z objektu.
console.log(person.name);

// 2. Změňte věk dané osoby na 28 a pak ho vypište do konzole.
person.age = 28;
console.log(person.age)

// 3. Vypište do konzole oblíbenou barvu osoby popsané objektem.
console.log(person["favorite color"]);


// Úkol 2 - Kurz
// 1. Vypište do konzole počet účastnic na posledním konání kurzu.
// 2. Vypište do konzole jméno posledního kouče na prvním konání kurzu.
// 3. Vypište do konzole celkový počet konání kurzu.
// 4. Pomocí cyklu vypište na výstup všechna místa, na kterých se kurz konal.
const course = {
  nazev: 'Úvod do programování',
  lektor: 'Martin Podloucký',
  konani: [
    {
      misto: 'T-Mobile',
      koucove: ['Dan Vrátil', 'Filip Kopecký', 'Martina Nemčoková'],
      ucastnic: 30,
    },
    {
      misto: 'MSD IT',
      koucove: ['Dan Vrátil', 'Zuzana Tučková', 'Martina Nemčoková'],
      ucastnic: 25,
    },
    {
      misto: 'Škoda DigiLab',
      koucove: ['Dan Vrátil', 'Filip Kopecký', 'Kateřina Kalášková'],
      ucastnic: 41,
    },
  ],
};

console.log(`Počet účastnic na posledním kurzu: ${course.konani[2].ucastnic}`);
console.log(`Jméno posledního kouče na prvním konání kurzu: ${course.konani[0].koucove[2]}`);
console.log(`Celkový počet konání kurzu: ${course.konani.length}`);

let mistoKonani = [];
for (let i = 0; i < course.konani.length; i++) {
  mistoKonani.push(course.konani[i].misto);
};
console.log(`Všechna místa, na kterých se kurz konal: ${mistoKonani} `);


// Úkol 3 - Knihovna
// Uvažte, jak byste pomocí objektu reprezentovali údaje o knize v knihovně. Jaké klíče a hodnoty bude objekt obsahovat? Zcela jistě bude každá kniha obsahovat například název. Chtěli bychom však také, aby kniha umožňovala mít vícero autorů a vícero vydání.
// 1. Ve JavaScriptovém programu vytvořte proměnnou obsahující pole, které bude obsahovat několik vašich oblíbených knih.
// 2. Vytvořte jednoduchou HTML stránku se ol seznamem. Použijte vlastnost innerHTML a pomocí cyklu naplňte tento seznam názvy vašech knih.

const bookShelf = [
  {
    title: 'The Cracked Pickle',
    author: 'Joe Jack',
    edition: [2, 3, 6],
  },
  {
    title: 'Case of the Blue Bulldog',
    author: ['Jaqueline Jasmine', 'Peter Pan'],
    edition: [1],
  },
  {
    title: 'Clue of the Bloody Claw',
    author: 'James John Kidney',
    edition: [3, 5],
  },
];

const bookTitle = document.querySelector('.books ol');
for (let i = 0; i < bookShelf.length; i++) {
  bookTitle.innerHTML += `<li>${bookShelf[i].title}</li>`;
};
