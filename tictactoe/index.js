'use strict';

let gamePlan = [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0]
];
// 0 = blank field

const cross = 1;
const circle = -1;
let next = 1; // next = symbol that is on turn
const winningCount = 4; // symbol count that wins

const gamePlanWidth = gamePlan[0].length;
const gamePlanHeight = gamePlan.length;
let gameNumberFields = gamePlanHeight * gamePlanWidth;

const squareElm = document.querySelectorAll('.square');
const stateTextElm = document.querySelector('.stateText');
const symbolElm = document.querySelector('.symbol');


// Determining the winner
const winner = (checkWinningPattern) => {
  if (checkWinningPattern === winningCount) {
    stateTextElm.textContent = "Vyhrál křížek!";
    stateTextElm.style.color = "rgb(3, 192, 3)";
    symbolElm.innerHTML = `
      <img class="cross" src="./img/cross.svg" alt="Cross" />
    `
  }
  else if (checkWinningPattern === -winningCount) {
    stateTextElm.textContent = "Vyhrálo kolečko!";
    stateTextElm.style.color = "rgb(3, 192, 3)";
    symbolElm.innerHTML = `
       <img class="circle" src="./img/circle.svg" alt="Circle" />
    `
  } else if (gameNumberFields === 0) {
    stateTextElm.textContent = "Je to remíza.";
    stateTextElm.style.color = "whitesmoke";
    symbolElm.innerHTML = "";
  }
  else {
    if (next === cross) {
      symbolElm.innerHTML = ` 
        <img class="cross" src="./img/cross.svg" alt="Cross">
              `;
    } else {
      symbolElm.innerHTML = ` 
        <img class="circle" src="./img/circle.svg" alt="Circle">
        `;
    }
  }
};


// Functions for score calculation

// HORIZONTAL
// Score - horizontal, RIGHT
const horizontalRight = (rowNumber, columnNumber, gamePlan, onTurnActual) => {
  let scoreHorizontalRight = 0;
  while (columnNumber < gamePlan[rowNumber].length - 1) {
    columnNumber++;
    if (gamePlan[rowNumber][columnNumber] === onTurnActual) {
      scoreHorizontalRight += onTurnActual;
    } else {
      break;
    }
  }
  return scoreHorizontalRight;
};

// Score - horizontal, LEFT
const horizontalLeft = (rowNumber, columnNumber, gamePlan, onTurnActual) => {
  let scoreHorizontalLeft = 0;
  while (columnNumber > 0) {
    columnNumber--;
    if (gamePlan[rowNumber][columnNumber] === onTurnActual) {
      scoreHorizontalLeft += onTurnActual;
    } else {
      break;
    }
  }
  return scoreHorizontalLeft;
};

// Checking the total score, HORIZONTAL
const checkScoreHorizontal = (rowNumber, columnNumber, gamePlan, onTurnActual) => {
  return onTurnActual + horizontalRight(rowNumber, columnNumber, gamePlan, onTurnActual) + horizontalLeft(rowNumber, columnNumber, gamePlan, onTurnActual);
}

// VERTICAL
// Score - vertical, UP
const verticalUp = (rowNumber, columnNumber, gamePlan, onTurnActual) => {
  let scoreVercticalUp = 0;
  while (rowNumber < gamePlan.length - 1) {
    rowNumber++;
    if (gamePlan[rowNumber][columnNumber] === onTurnActual) {
      scoreVercticalUp += onTurnActual;
    } else {
      break;
    }
  }
  return scoreVercticalUp;
};

// Score - vertical, DOWN
const verticalDown = (rowNumber, columnNumber, gamePlan, onTurnActual) => {
  let scoreVercticalDown = 0;
  while (rowNumber > 0) {
    rowNumber--;
    if (gamePlan[rowNumber][columnNumber] === onTurnActual) {
      scoreVercticalDown += onTurnActual;
    } else {
      break;
    }
  }
  return scoreVercticalDown;
};

// Checking the total score, VERTICAL
const checkScoreVertical = (rowNumber, columnNumber, gamePlan, onTurnActual) => {
  return onTurnActual + verticalUp(rowNumber, columnNumber, gamePlan, onTurnActual) + verticalDown(rowNumber, columnNumber, gamePlan, onTurnActual);
};


// DIAGONAL
// Diagonal from RIGHT corner to left DOWN
const diagonalRightDown = (rowNumber, columnNumber, gamePlan, onTurnActual) => {
  let scoreDiagonalRightDown = 0;
  while (rowNumber < gamePlan.length - 1 && columnNumber > 0) {
    rowNumber++;
    columnNumber--;
    if (gamePlan[rowNumber][columnNumber] === onTurnActual) {
      scoreDiagonalRightDown += onTurnActual;
    } else {
      break;
    }
  }
  return scoreDiagonalRightDown;
};


const diagonalRightUp = (rowNumber, columnNumber, gamePlan, onTurnActual) => {
  let scoreDiagonalRightUp = 0;
  while (columnNumber < gamePlan.length - 1 && rowNumber > 0) {
    columnNumber++;
    rowNumber--;
    if (gamePlan[rowNumber][columnNumber] === onTurnActual) {
      scoreDiagonalRightUp += onTurnActual;
    } else {
      break;
    }
  }
  return scoreDiagonalRightUp;
};

// Checking the total score, DIAGONAL starting from upper right corner
const checkScoreDiagonalRight = (rowNumber, columnNumber, gamePlan, onTurnActual) => {
  return onTurnActual + diagonalRightDown(rowNumber, columnNumber, gamePlan, onTurnActual) + diagonalRightUp(rowNumber, columnNumber, gamePlan, onTurnActual);
};

// Diagonal from LEFT corner to right DOWN
const diagonalLeftDown = (rowNumber, columnNumber, gamePlan, onTurnActual) => {
  let scoreDiagonalLeftDown = 0;
  while (columnNumber < gamePlan.length - 1 && rowNumber < gamePlan.length - 1) {
    columnNumber++;
    rowNumber++;
    if (gamePlan[rowNumber][columnNumber] === onTurnActual) {
      scoreDiagonalLeftDown += onTurnActual;
    } else {
      break;
    }
  }
  return scoreDiagonalLeftDown;
};

// Diagonal from LEFT corner to right UP
const diagonalLeftUp = (rowNumber, columnNumber, gamePlan, onTurnActual) => {
  let scoreDiagonalLeftUp = 0;
  while (rowNumber > 0 && columnNumber > 0) {
    columnNumber--;
    rowNumber--;
    if (gamePlan[rowNumber][columnNumber] === onTurnActual) {
      scoreDiagonalLeftUp += onTurnActual;
    } else {
      break;
    }
  }
  return scoreDiagonalLeftUp;
};

// Checking the total score, DIAGONAL starting from upper left corner
const checkScoreDiagonalLeft = (rowNumber, columnNumber, gamePlan, onTurnActual) => {
  return onTurnActual + diagonalLeftDown(rowNumber, columnNumber, gamePlan, onTurnActual) + diagonalLeftUp(rowNumber, columnNumber, gamePlan, onTurnActual);
};

const checkWinningPattern = (rowNumber, columnNumber, gamePlan, onTurnActual) => {
  gameNumberFields--; // for calculation of draw state

  if (Math.abs(checkScoreHorizontal(rowNumber, columnNumber, gamePlan, onTurnActual)) === winningCount) {
    squareClickListener(false);
    return checkScoreHorizontal(rowNumber, columnNumber, gamePlan, onTurnActual);
  }

  else if (Math.abs(checkScoreVertical(rowNumber, columnNumber, gamePlan, onTurnActual)) === winningCount) {
    squareClickListener(false);
    return checkScoreVertical(rowNumber, columnNumber, gamePlan, onTurnActual);
  }

  else if (Math.abs(checkScoreDiagonalLeft(rowNumber, columnNumber, gamePlan, onTurnActual)) === winningCount) {
    squareClickListener(false);
    return checkScoreDiagonalLeft(rowNumber, columnNumber, gamePlan, onTurnActual);
  }

  else if (Math.abs(checkScoreDiagonalRight(rowNumber, columnNumber, gamePlan, onTurnActual)) === winningCount) {
    squareClickListener(false);
    return checkScoreDiagonalRight(rowNumber, columnNumber, gamePlan, onTurnActual);
  }
};


// After click on a square add a class, change the value in gamePlan and the onTurn number
const squareClick = function () {
  const rowNumber = this.dataset.row;
  const columnNumber = this.dataset.column;

  if (gamePlan[rowNumber][columnNumber] === 0) {
    if (next === cross) {
      this.classList.add('square--cross');
      gamePlan[rowNumber][columnNumber] = next;
      next = circle;
    }
    else if (next === circle) {
      this.classList.add('square--circle');
      gamePlan[rowNumber][columnNumber] = next;
      next = cross;
    }
  }

  let onTurnActual = - next;

  // Checking if a symbol hasn't won
  winner(checkWinningPattern(rowNumber, columnNumber, gamePlan, onTurnActual));

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
  gamePlan = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
  ];
  gameNumberFields = gamePlanHeight * gamePlanWidth;

  stateTextElm.textContent = "Na řadě je";
  stateTextElm.style.color = "rgba(255, 255, 255, 0.8)";
  if (next === 1) {
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