/**
  @param Children The content (❌ or ⭕)
  @param isSelected To know the turn
  @param updateBoard Show the x or O on the table
  @param index Know which board is being clicked on
*/
export function Square({ children, isSelected, updateBoard, index }) {
  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div className={className} onClick={handleClick}>
      {children}
    </div>
  )
}
