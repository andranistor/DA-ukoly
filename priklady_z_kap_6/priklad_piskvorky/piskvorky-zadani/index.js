'use strict';

let gamePlan = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // 0 = blank field

// Winnig patterns:
const patterns = [
  // horizontal (4 variants)
  [
    1, 1, 1, 1,
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0
  ],
  [
    0, 0, 0, 0,
    1, 1, 1, 1,
    0, 0, 0, 0,
    0, 0, 0, 0
  ],
  [
    0, 0, 0, 0,
    0, 0, 0, 0,
    1, 1, 1, 1,
    0, 0, 0, 0
  ],
  [
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0,
    1, 1, 1, 1
  ],

  // vertical (4 variants)
  [
    1, 0, 0, 0,
    1, 0, 0, 0,
    1, 0, 0, 0,
    1, 0, 0, 0
  ],
  [
    0, 1, 0, 0,
    0, 1, 0, 0,
    0, 1, 0, 0,
    0, 1, 0, 0
  ],
  [
    0, 0, 1, 0,
    0, 0, 1, 0,
    0, 0, 1, 0,
    0, 0, 1, 0
  ],
  [
    0, 0, 0, 1,
    0, 0, 0, 1,
    0, 0, 0, 1,
    0, 0, 0, 1
  ],

  // diagonal (2 variants)
  [
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1
  ],
  [
    0, 0, 0, 1,
    0, 0, 1, 0,
    0, 1, 0, 0,
    1, 0, 0, 0
  ],

  // square (9 variants)
  [
    1, 1, 0, 0,
    1, 1, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0
  ],
  [
    0, 1, 1, 0,
    0, 1, 1, 0,
    0, 0, 0, 0,
    0, 0, 0, 0
  ],
  [
    0, 0, 1, 1,
    0, 0, 1, 1,
    0, 0, 0, 0,
    0, 0, 0, 0
  ],
  [
    0, 0, 0, 0,
    1, 1, 0, 0,
    1, 1, 0, 0,
    0, 0, 0, 0
  ],
  [
    0, 0, 0, 0,
    0, 1, 1, 0,
    0, 1, 1, 0,
    0, 0, 0, 0
  ],
  [
    0, 0, 0, 0,
    0, 0, 1, 1,
    0, 0, 1, 1,
    0, 0, 0, 0
  ],
  [
    0, 0, 0, 0,
    0, 0, 0, 0,
    1, 1, 0, 0,
    1, 1, 0, 0
  ],
  [
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 1, 1, 0,
    0, 1, 1, 0
  ],
  [
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 1, 1,
    0, 0, 1, 1
  ],

  // diamond (4 variants)
  [
    0, 1, 0, 0,
    1, 0, 1, 0,
    0, 1, 0, 0,
    0, 0, 0, 0
  ],
  [
    0, 0, 1, 0,
    0, 1, 0, 1,
    0, 0, 1, 0,
    0, 0, 0, 0
  ],
  [
    0, 0, 0, 0,
    0, 1, 0, 0,
    1, 0, 1, 0,
    0, 1, 0, 0
  ],
  [
    0, 0, 0, 0,
    0, 0, 1, 0,
    0, 1, 0, 1,
    0, 0, 1, 0
  ],
];

const squareElm = document.querySelectorAll('.square');
let onTurn = 1; // 1 = cross, -1 = circle
const stateTextElm = document.querySelector('.gameStateText');
const symbolElm = document.querySelector('.symbol');


// Calculating the scalar product of arrays and its evaluation
const score = () => {
  for (let j = 0; j < patterns.length; j++) {
    let product = 0;
    for (let i = 0; i < gamePlan.length; i++) {
      product += gamePlan[i] * patterns[j][i];
    }

    if (product === 4) {
      stateTextElm.innerHTML = `
      <p class="winner"> Vyhrál křížek!</p>
      `;
      squareClickListener(false);
      break;
    }
    else if (product === -4) {
      stateTextElm.innerHTML = `
      <p class="winner"> Vyhrálo kolečko!</p>
      `;
      squareClickListener(false);
      break;
    } else if (!gamePlan.includes(0)) {
      stateTextElm.innerHTML = `
      <p class="draw"> Je to remíza.</p>
      `;
      squareClickListener(false);
      break;
    }
    else {
      if (onTurn === 1) {
        symbolElm.innerHTML = ` 
        <img class="cross" src="./img/cross.svg" alt="Cross">
              `;
      } else {
        symbolElm.innerHTML = ` 
        <img class="circle" src="./img/circle.svg" alt="Circle">
        `;
      }
    }
  }
}


// After click on a square add a class, change the value in gamePlan and the onTurn number
const squareClick = (event) => {
  if (gamePlan[event.target.dataset.index] === 0) {
    if (onTurn === 1) {
      squareElm[event.target.dataset.index]
        .classList.add('square--cross');
      gamePlan[event.target.dataset.index] = onTurn;
      onTurn = -1;
    }
    else if (onTurn === -1) {
      squareElm[event.target.dataset.index]
        .classList.add('square--circle');
      gamePlan[event.target.dataset.index] = onTurn;
      onTurn = 1;
    }
    score();
  }
};


// Adding/removing square click listener
const squareClickListener = (active) => {
  for (let i = 0; i < squareElm.length; i += 1) {
    if (active) {
      squareElm[i].addEventListener('click', squareClick);
    } else {
      squareElm[i].removeEventListener('click', squareClick);
    }
  }
};
squareClickListener(true);


// Btn click to restart a new game, i.e. removing classes and resetting the gamePlan
const restartGame = () => {
  gamePlan = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  if (onTurn === 1) {
    symbolElm.innerHTML = `
      <img class="cross" src="./img/cross.svg" alt="Cross" />
    `;
  } else {
    symbolElm.innerHTML = `
       <img class="circle" src="./img/circle.svg" alt="Circle" />
    `;
  }
  for (let i = 0; i < squareElm.length; i++) {
    squareElm[i].classList.remove('square--cross', 'square--circle');
  }
  squareClickListener(true);
};

const btnRestartElm = document.querySelector('.btn__restart');
btnRestartElm.addEventListener('click', restartGame);


// Displays img with winning patterns
const displayHelp = () => {
  const helpImg = document.querySelector('.rules');
  if (helpImg.style.display === 'none') {
    helpImg.style.display = 'flex';
  } else {
    helpImg.style.display = 'none';
  }
  ;
};

const btnHelpElm = document.querySelector('.btn__help');
btnHelpElm.addEventListener('click', displayHelp)