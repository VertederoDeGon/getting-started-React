import { useState } from 'react'
import { Square } from './components/Square'
import { WinnerModal } from './components/WinnerModal'
import { checkEndGame, checkWinnerFrom } from './logic/board'
import { resetGameStorage, saveGameToStorage } from './logic/storage'

import confetti from 'canvas-confetti'
import { TURNS } from './constants'

function useBoard () {
  const [turn, setTurn] = useState(() => {
    //read data from localStorage is slow, is synchronous and blocking
    const turnFromStorage = localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })

  //never use hooks inside conditionals
  const [board, setBoard] = useState(() => {
    //do this instead:
    const boardFromStorage = localStorage.getItem('board')
    if (boardFromStorage) return JSON.parse(boardFromStorage)
    return Array(9).fill(null)
  })

  //false is draw | null is no winner
  const [winner, setWinner] = useState(null)

  const updateBoard = index => {
    //does not update the position if marked
    if (board[index] || winner) return

    //update the board
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(prevBoard => {
      console.log({ prevBoard })
      console.log({ newBoard })
      return newBoard
    })

    //next turn
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    //save game
    saveGameToStorage({ board: newBoard, turn: newTurn })

    //check winner
    const newWinner = checkWinnerFrom(newBoard)
    //Set the state bc it is asynchronous
    if (newWinner) {
      confetti()
      setWinner(newWinner) //Winner
    } else if (checkEndGame(newBoard)) setWinner(false) //Draw
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    resetGameStorage()
  }

  if (winner || winner === false) resetGameStorage()
  return { board, turn, winner, updateBoard, resetGame }
}

function App () {
  console.time('🚀')

  const { board, turn, winner, resetGame, updateBoard } = useBoard()

  return (
    <main className='board'>
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Reset game</button>
      <div className='game'>
        {board.map((square, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {square}
            </Square>
          )
        })}
      </div>
      <div className='turn'>
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </div>
      <WinnerModal resetGame={resetGame} winner={winner} />
      {console.timeEnd('🚀', 'hola')}
    </main>
  )
}

export default App
