import { isWinner } from "./isWinner";

describe("isWinner()", () => {
  it("returns true for a horizontal winner", () => {
    const board = [
      ["x", "x", "x"],
      ["", "", ""],
      ["", "", ""]
    ];
    const player = "x";
    const column = 0;
    const row = 0;

    expect(isWinner(board, player, column, row)).toBe(true);
  });

  it("returns true for a vertical winner", () => {
    const board = [
      ["x", "", ""],
      ["x", "", ""],
      ["x", "", ""]
    ];
    const player = "x";
    const column = 0;
    const row = 0;

    expect(isWinner(board, player, column, row)).toBe(true);
  });

  it("returns true for a diagonal winner", () => {
    const board = [
      ["x", "", ""],
      ["", "x", ""],
      ["", "", "x"]
    ];
    const player = "x";
    const column = 0;
    const row = 0;

    expect(isWinner(board, player, column, row)).toBe(true);
  });

  it("returns false when there's no winner based on the new value", () => {
    const board = [
      ["x", "", ""],
      ["", "o", ""],
      ["", "", "x"]
    ];
    const player = "x";
    const column = 0;
    const row = 0;

    expect(isWinner(board, player, column, row)).toBe(false);
  });

  it("returns false when there's no winner based on the new value (larger board)", () => {
    const board = [
      ["x", "", "", "", "", "o"],
      ["o", "o", "", "", "o", ""],
      ["", "o", "x", "", "", ""],
      ["", "", "", "", "", ""],
      ["x", "", "", "", "", ""],
      ["x", "", "x", "", "", ""]
    ];
    const player = "o";
    const column = 5;
    const row = 3;

    expect(isWinner(board, player, column, row)).toBe(false);
  });

  it("returns true when there's a winner based on the new value (larger board)", () => {
    const board = [
      ["x", "", "x", "", "", "o"],
      ["x", "o", "", "", "o", ""],
      ["x", "o", "", "o", "", ""],
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""]
    ];
    const player = "x";
    const column = 0;
    const row = 0;

    expect(isWinner(board, player, column, row)).toBe(true);
  });
});
