import { generateBoard } from "./generateBoard";

describe("generateBoard()", () => {
  it("generates a 2d array grid based on a size of 5", () => {
    const board = generateBoard(5);

    expect(board).toHaveLength(5);
    expect(board[0]).toHaveLength(5);
    expect(board[4]).toHaveLength(5);
  });

  it("generates a 2d array grid based on a size of 3", () => {
    const board = generateBoard(3);

    expect(board).toHaveLength(3);
    expect(board[0]).toHaveLength(3);
    expect(board[2]).toHaveLength(3);
  });
});
