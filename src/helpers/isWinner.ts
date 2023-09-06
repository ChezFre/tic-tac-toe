export const isWinner = (
  board: string[][],
  player: "x" | "o",
  column: number,
  row: number
): boolean => {
  let horizontal = 0;
  let vertical = 0;
  let diagonalOne = 0;
  let diagonalTwo = 0;

  for (let i = 0; i < 5; i++) {
    horizontal = board[row][column - 2 + i] === player ? horizontal + 1 : 0;
    vertical = board[row - 2 + i]?.[column] === player ? vertical + 1 : 0;
    diagonalOne =
      board[row - 2 + i]?.[column - 2 + i] === player ? diagonalOne + 1 : 0;
    diagonalTwo =
      board[row + 2 - i]?.[column - 2 + i] === player ? diagonalTwo + 1 : 0;

    if (
      horizontal === 3 ||
      vertical === 3 ||
      diagonalOne === 3 ||
      diagonalTwo === 3
    )
      return true;
  }

  return false;
};
