import Player from "./Palyer";
import GameBoard from "./GameBoard";
import { useState } from "react";
let initBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
function isGameover(board, lastMove) {
  for (let i = 0; i < 3; i++) {
    console.log("i ; ", i);
    if (
      lastMove === board[i][0] &&
      lastMove === board[i][1] &&
      lastMove === board[i][2]
    ) {
      console.log("GAME OVER");
      return true;
    } else if (
      lastMove === board[0][i] &&
      lastMove === board[1][i] &&
      lastMove === board[2][i]
    ) {
      console.log("GAME OVER");
      return true;
    } else if (
      lastMove === board[0][0] &&
      lastMove === board[1][1] &&
      lastMove === board[2][2]
    ) {
      console.log("GAME OVER");
      return true;
    } else if (
      lastMove === board[2][0] &&
      lastMove === board[1][1] &&
      lastMove === board[0][2]
    ) {
      console.log("GAME OVER");
      return true;
    }
  }
  return false;
}

let winner;
let winBoard;
export default function TurnBase({ setLastMove }) {
  const [turn, setTurn] = useState(`x`);
  let [board, setBoard] = useState(initBoard);
  let end = false;
  function turnHandler(rowIndex, colIndex) {
    setBoard((prev) => {
      let newBoard = [...prev.map((e) => [...e])];
      // let newBoard = prev;
      newBoard[rowIndex][colIndex] = turn;
      console.table(newBoard);
      console.log("isGameover", isGameover(newBoard, turn));
      if (isGameover(newBoard, turn)) {
        winner = `${turn} is the winner`;
        winBoard = prev;
        console.log(winner);
      }

      return newBoard;
    });
    setLastMove((prev) => {
      let loger = [...prev];
      loger.unshift({
        player: turn,
        row: rowIndex,
        col: colIndex,
      });
      if (loger.length > 8) winner = `DRAW`;
      console.log("loger,", loger);
      return loger;
    });
    setTurn((prev) => (prev === "x" ? "o" : "x"));
  }
  function HandleWin() {
    setTurn("x");
    setBoard([...initBoard.map((ele) => [...ele])]);
    setLastMove([]);
    winner = null;
  }
  console.log("turn : ", turn);
  console.log("winner : ", winner);
  return (
    <>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initName={"player 1"} isTurn={turn === "x"} initSympol="x" />
          <Player initName={"player 2"} isTurn={turn === "o"} initSympol="o" />
        </ol>
        <GameBoard board={board} turnHandler={turnHandler} />
        {winner && (
          <div id="game-over">
            <h2>GameOver</h2>
            <p>{winner}</p>
            <button onClick={HandleWin}>rematch!</button>
          </div>
        )}
      </div>
    </>
  );
}
