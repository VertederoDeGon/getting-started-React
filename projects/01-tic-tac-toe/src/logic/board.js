import { WINNER_COMBOS } from '../constants'

export const checkWinnerFrom = boardToCheck => {
  console.warn('🚀 CHECKING...')
  //checking all the winner posibilities to know if X or O won
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo

    //Checking if there is a winner
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    )
      return boardToCheck[a] //return 'X' or 'O'
  }

  //if there is no winner
  return null
}

//check if there is a draw
export const checkEndGame = newBoard =>
  newBoard.every(square => square !== null)
