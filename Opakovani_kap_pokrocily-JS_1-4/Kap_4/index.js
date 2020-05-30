'use strict';
// Úkol 1: Pejsek
// Vytvořte objekt pes. Pes má vlastnosti jméno, barva srsti a délka srsti. Dále má metody stekej, zavrc a trhej. Tyto metody jen vypisují do konzole vhodný text. (U metody trhej vymyslete nějakou vtipnou hlášku.) Pracujte v konzoli.
// Svého psa si v konzoli pořádně otestujte!
const dog = {
  name: 'Alík',
  furColor: 'strakatá',
  bark() {
    return 'Haf, haf!';
  },
  growl() {
    return 'Vrrr!'
  },
  tear() {
    return 'Trh, trh!'
  },
};


// Úkol 2: Profil na seznamce
// 1. Vytvořte objekt profil, který obsahuje data potřebná k seznamování na seznamce. V našem případě to bude jméno, barva vlasů, barva očí a oblíbený drink na prvním rande.
// 2. Přidejte do objektu metodu, která do konzole vypíše text seznamovacího inzerátu. Text bude obsahovat všechna data z objektu, tedy jméno, obě barvy a oblíbený drink. Používejte klíčové slovo this. Udělejte to chytře, abyste se vyhnuli skloňování.
const profil = {
  name: 'Peter Pan',
  hairColor: 'brown',
  eyeColor: 'blue',
  favoriteDrink: 'Flower necktar',
  adText() {
    return `Hi, my name is ${this.name}. I have ${this.hairColor} hair, ${this.eyeColor} eyes and I would like to invite you for a drink called ${this.favoriteDrink}.`
  },
};


// Úkol 4: Pozemky
// Představte si, že programujeme aplikaci, která spravuje inzeráty k pronájmu pozemků. Každý pozemek budeme reprezentovat jak obdélník s určitou šírkou a výškou v metrech. Pro každý pozemek také budeme chtít určit jeho výměru v metrech čtverečních a obvod pozemku v metrech.
// Založte JavaScriptový program a vytvořte objekt s názvem Estate podle vzoru. Tento objekt bude představovat prototyp pro všechny naše pozemky.
// 1. Doplňte kód metody area, která na základě hodnot this.width a this.height vrátí výměru pozemku v metrech čtverečních.
// 2. Doplňte kód metody border, která spočítá délku hranice pozemku v metrech.
// 3. Vytvořte objekt estate1.
// 4. Pomocí vlastnosti __proto__ nastavte tomuto pozemku prototyp Estate. V konzoli vyzkoušejte následujicí příkazy: estate1.area(), estate1.border()
// 5. Vytvořte pozemek estate2 s nějakými rozměry a správným prototypem a v konzli vyzoušejte, že i tento správně funguje.

// Úkol 5: Cena pozemku
// 1. Do všech pozemků přidejte novou vlastnost m2Price, která udává cenu pozemku za jeden metr čtvereční.
// 2. Do prototypu Estate přidejte metodu price, která spočítá cenu celého pozemku podle jeho výměry.
// 3. Vyzkoušejte v konzoli zavolat metodu price na všech vašich pozemcích.
// 4. Vyzkoušejte, co se stane, když do některého pozemku zapomenete vloži vlastnost m2price a zkusíte zavolat metodu price.
const Estate = {
  area() {
    return this.width * this.height;
  },
  border() {
    return 2 * (this.width + this.height);
  },
  price() {
    return this.area() * this.m2Price
  },
};

const estate1 = {
  __proto__: Estate,
  width: 120,
  height: 50,
  m2Price: 450,
};

const estate2 = {
  __proto__: Estate,
  width: 100,
  height: 60,
  m2Price: 300,
};


// Úkol 6: Hodiny
// Vytvořte prototyp Clock, který bude přestavovat digitální hodiny zobrazující hodiny a minuty. Metody prototypu pracují s vlastnostmi this.hours a this.minutes.
// 1. Přidejte do prototypu metodu hourUp, která zvýší čas na hodinách o jednu hodinu. Hodiny používají 24-hodinový formát, pod hodině 23 tedy následuje hodina 0.
// 2. Podobným způsobem vytvořte metodu hourDown, která sníží čas o jednu hodinu.
// 3. Přidejte metodu minuteUp, která zvýší čas na hodinách o jednu minutu. Dejte dobrý pozor na časy jako 9:59 a hlavně 23:59.
// 4. Přidejte metodu minuteDown, která sníží čas na hodinách o jednu minutu. Pozor na časy jako 9:00 a hlavně 0:00.
// 5. Přidejte metodu show, která vrátí řetězec s aktuláním časem na hodinách ve formátu H:MM, jedy alespoň jedna cifra pro hodinu a přesně dvě cifry pro minutu.
// 6. Vytvořte několik objektů hodin s různými časy a vyzkoušejte v konzoli svoje metody.
const Clock = {
  hourUp() {
    if (this.hour === 23) {
      this.hour = 0;
      return this.hour;
    }
    return this.hour = (this.hour + 24) % 24 + 1;
  },
  hourDown() {
    if (this.hour === 0) {
      this.hour = 23;
      return this.hour;
    }
    return this.hour = (this.hour + 24) % 24 - 1;
  },
  minuteUp() {
    if (this.minute === 59) {
      this.minute = 0;
      this.hourUp();
      return this.minute;
    }
    return this.minute = (this.minute + 60) % 60 + 1;
  },
  minuteDown() {
    if (this.minute === 0) {
      this.minute = 59;
      this.hourDown();
      return this.minute;
    }
    return this.minute = (this.minute + 60) % 60 - 1;
  },
  show() {
    return `${String(this.hour).padStart(2, '0')}:${String(this.minute).padStart(2, '0')}`;
  },
};

// Testing
const clock1 = {
  __proto__: Clock,
  hour: 23,
  minute: 59,
}

const clock2 = {
  __proto__: Clock,
  hour: 12,
  minute: 0,
}

const testClock = (clock) => {
  console.log('Current time: ' + clock.show());

  clock.hourUp();
  console.log('Hour up: ' + clock.show());

  clock.hourDown();
  console.log('Hour down: ' + clock.show());


  clock.hourUp();
  clock.minuteDown();
  console.log('Hour up and minute down: ' + clock.show());


  clock.hourDown();
  clock.minuteUp();
  clock.minuteUp();
  console.log('Hour down and minute up 2x: ' + clock.show() + ' ----------');
};

testClock(clock1);
testClock(clock2);


// Úkol 7: Pozemky 2
// Převeďte prototyp Estate z předchozího cvičení na nový formát zápisu prototypů pomocí konstrukturu. Pomocí Object.create a volání konstruktoru vytvořte několik pozemků a v konzoli vyzkoušejte, že fungují.
const EstateObj = {
  constructor(width, height, m2Price) {
    this.width = width;
    this.height = height;
    this.m2Price = m2Price;
  },
  area() {
    return this.width * this.height;
  },
  border() {
    return 2 * (this.width + this.height);
  },
  price() {
    return this.area() * this.m2Price
  },
};

const estate3 = Object.create(EstateObj);
estate3.constructor(120, 50, 450);

const estate4 = Object.create(EstateObj);
estate4.constructor(100, 60, 300);


// // Úkol 8: Hodiny 2
// Převeďte prototyp Clock z předchozího cvičení na nový formát zápisu prototypů pomocí konstruktoru. Pomocí Object.create a volání konstruktoru vytvořte několik digitálních hodin a v konzoli vyzkoušejte, že fungují.
// Úkol 9: Hodiny 3
// 1. Přidejte do prototypu hodin metodu render, která vytvoří a vrátí DOM element hodin podle vzoru.
// 2. Přidejte do prototypu metodu mount se vstupem parent, což bude nějaký DOM element. Pomocí metody render vytvořte v metodě mount DOM element hodin a pomocí appendChild jej zapojte na konec elementu parent.
// 3. V konzoli vytvořte nějaké digitální hodiny a pomocí metody mount je zapojte do stránky. Zkuste do stránky zpojit více různých hodin za sebou.

const ClockObj = {
  constructor(hour, minute) {
    this.hour = hour;
    this.minute = minute;
  },
  hourUp() {
    if (this.hour === 23) {
      this.hour = 0;
      return this.hour;
    }
    return this.hour = (this.hour + 24) % 24 + 1;
  },
  hourDown() {
    if (this.hour === 0) {
      this.hour = 23;
      return this.hour;
    }
    return this.hour = (this.hour + 24) % 24 - 1;
  },
  minuteUp() {
    if (this.minute === 59) {
      this.minute = 0;
      this.hourUp();
      return this.minute;
    }
    return this.minute = (this.minute + 60) % 60 + 1;
  },
  minuteDown() {
    if (this.minute === 0) {
      this.minute = 59;
      this.hourDown();
      return this.minute;
    }
    return this.minute = (this.minute + 60) % 60 - 1;
  },

  showMinute() {
    return `${String(this.minute).padStart(2, '0')}`
  },

  showHour() {
    return `${String(this.hour).padStart(2, '0')}`
  },

  show() {
    return `${this.showHour()}:${this.showMinute()}`;
  },

  renderClock() {
    const displayClockElm = document.createElement('div');
    displayClockElm.className = 'currentTime';
    displayClockElm.innerHTML = `
<div class="clock">
  <span class="clock__hours">${this.showHour()}</span>
  :
  <span class="clock__minutes">${this.showMinute()}</span>
</div>
`;
    return displayClockElm;
  },

  mount(parent) {
    const parentElm = document.querySelector(parent)
    parentElm.appendChild(this.renderClock());
  },
};

const clock3 = Object.create(ClockObj);
clock3.constructor(9, 59);

testClock(clock3);
