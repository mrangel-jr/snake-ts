import Snake, { InputSnake } from "../src/snake";

describe("Snake function", () => {
  it("should return empty array", () => {
    const testArray: InputSnake = [[]];

    const result = Snake(testArray);

    expect(result).toEqual([]);
  });
  it("should return an array of matrix 3x3", () => {
    const testArray: InputSnake = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];

    const result = Snake(testArray);

    expect(result).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
  });
  it("should return an array of matrix 4x4", () => {
    const testArray: InputSnake = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ];

    const result = Snake(testArray);

    expect(result).toEqual([
      1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10,
    ]);
  });
});
