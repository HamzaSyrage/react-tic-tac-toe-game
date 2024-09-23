export default function GameBoard({ turnHandler, board }) {
  return (
    <>
      <ol id="game-board">
        {board.map((row, rowIndex) => (
          <li key={rowIndex}>
            <ol>
              {row.map((sympol, colIndex) => (
                <li key={colIndex}>
                  <button
                    onClick={() => {
                      turnHandler(rowIndex, colIndex);
                    }}
                    disabled={sympol}
                  >
                    {sympol}
                  </button>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </>
  );
}
