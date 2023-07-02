import { Square } from './Square'
export function WinnerModal ({ winner, resetGame }) {
  if (winner === null) return

  const winnerText = winner === false ? 'Draw' : 'Won'

  return (
    <section className='winner'>
      <div className='text'>
        <h2>{winnerText}</h2>
        <div className='win'>{winner && <Square>{winner}</Square>}</div>
      </div>

      <footer>
        <button onClick={resetGame}>Start again</button>
      </footer>
    </section>
  )
}
