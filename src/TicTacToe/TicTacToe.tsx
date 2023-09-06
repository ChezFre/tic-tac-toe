import { useState } from "react";
import * as styles from "./TicTacToe.module.css";

import {
  generateBoard,
  isWinner,
  updateBoard,
  hasEmptySpaces,
} from "../helpers";

type TicTacToeProps = {
  size?: number;
};

const TicTacToe = ({ size = 3 }: TicTacToeProps) => {
  const [hasWon, setHasWon] = useState(false);
  const [hasNoWinners, setHasNoWinners] = useState(false);
  const [activePlayer, setActivePlayer] = useState<"x" | "o">("x");
  const [board, setBoard] = useState(generateBoard(size));

  const handleClick = (rowIndex: number, columnIndex: number) => {
    const newBoard = updateBoard(board, rowIndex, columnIndex, activePlayer);
    setBoard(newBoard);

    // 1. Is there a winner?
    if (isWinner(newBoard, activePlayer, columnIndex, rowIndex)) {
      setHasWon(true);
      return;
    }

    // 2. There is no winner, but maybe all empty spaces have been used up?
    if (!hasEmptySpaces(newBoard)) {
      setHasNoWinners(true);
      return;
    }

    // 3. We're still playing - change turn to next player
    setActivePlayer(activePlayer === "x" ? "o" : "x");
  };

  const handleRestart = () => {
    setHasWon(false);
    setHasNoWinners(false);
    setBoard(generateBoard(size));
  };

  return (
    <div>
      <p>
        {hasNoWinners
          ? "Game ended in a draw"
          : `${activePlayer} ${hasWon ? "has won" : "is at play"}`}
      </p>
      <div className={styles.board}>
        {board.map((row, rowIndex) => (
          <div key={`row_${rowIndex}`} className={styles.row}>
            {row.map((_: string, columnIndex: number) => (
              <div key={`column_${columnIndex}`} className={styles.column}>
                {hasWon || board[rowIndex][columnIndex] ? (
                  board[rowIndex][columnIndex]
                ) : (
                  <button
                    onClick={() => handleClick(rowIndex, columnIndex)}
                  ></button>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
      {hasNoWinners || hasWon ? (
        <button onClick={handleRestart}>Restart</button>
      ) : null}
    </div>
  );
};

export { TicTacToe };
