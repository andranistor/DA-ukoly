'use strict';

let gamePlan = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let onTurn = 1;
const squareElm = document.querySelectorAll('.square');

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
  }
}

const squareClickListener = () => {
  for (let i = 0; i < squareElm.length; i += 1) {
    squareElm[i].addEventListener('click', squareClick);
  }
};

squareClickListener();