import { hasEmptySpaces } from "./hasEmptySpaces";

describe("hasEmptySpaces()", () => {
  it("should return true if the board is not filled in", () => {
    const board = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""]
    ];
    expect(hasEmptySpaces(board)).toBe(true);
  });

  it("should return true if the board is not filled in", () => {
    const board = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""]
    ];
    expect(hasEmptySpaces(board)).toBe(true);
  });

  it("should return true if the board is not filled in", () => {
    const board = [
      ["x", "x", "x"],
      ["x", "", "x"],
      ["x", "x", "x"]
    ];
    expect(hasEmptySpaces(board)).toBe(true);
  });

  it("should return false if the board is filled in", () => {
    const board = [
      ["x", "x", "x"],
      ["x", "x", "x"],
      ["x", "x", "x"]
    ];
    expect(hasEmptySpaces(board)).toBe(false);
  });
});
