import { updateBoard } from "./updateBoard";

describe("updateBoard()", () => {
  it("should not mutate the passed in board", () => {
    const board = [
      ["x", "", ""],
      ["", "o", ""],
      ["", "", "x"]
    ];
    const updatedBoard = updateBoard(board, 0, 1, "x");

    expect(updatedBoard).not.toBe(board);
  });

  it("should return the original board when trying to override a value", () => {
    const board = [
      ["x", "", ""],
      ["", "o", ""],
      ["", "", "x"]
    ];
    const updatedBoard = updateBoard(board, 0, 0, "o");

    expect(updatedBoard).toBe(board);
  });

  it("should return a new board with the played value", () => {
    const board = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""]
    ];
    const rowIndex = 0;
    const columnIndex = 1;
    const player = "o";
    const updatedBoard = updateBoard(board, rowIndex, columnIndex, player);

    expect(updatedBoard[rowIndex][columnIndex]).toBe(player);
  });
});
