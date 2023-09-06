export const updateBoard = (
  board: string[][],
  rowIndex: number,
  columnIndex: number,
  player: "x" | "o"
) => {
  if (board[rowIndex][columnIndex]) return board;

  const newBoard = [...board];

  newBoard[rowIndex] = [...newBoard[rowIndex]];
  newBoard[rowIndex][columnIndex] = player;

  return newBoard;
};
