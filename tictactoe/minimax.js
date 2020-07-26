// console.log(gamePlan);

function bestMove(rowNumber, columnNumber, gamePlan) {

  // AI's turn
  let bestScore = -Infinity; // Keeping track of the best score
  let bestMove;


  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {

      // Is the field available?
      if (gamePlan[i][j] === 0) {
        gamePlan[i][j] = ai;
        let score = minimax(gamePlan);
        gamePlan[i][j] = 0;

        if (score > bestScore) {
          bestScore = score;
          bestMove = { i, j };
        }
      }
    }
  }
  // console.log('icko je: ' + bestMove.i);
  gamePlan[bestMove.i][bestMove.j] = ai;
  console.log([bestMove.i] + " , " + [bestMove.j])
  currentPlayer = human;

  // console.log(currentPlayer)

};

function minimax(gamePlan) {
  return 1;
}