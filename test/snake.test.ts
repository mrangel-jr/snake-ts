import Snake, { InputSnake } from "../src/snake";

describe("Snake function", () => {
  it("should return empty array", () => {
    const testMatrix: InputSnake = [[]];

    const result = Snake(testMatrix);

    expect(result).toStrictEqual([]);
  });
  it("should return an array of matrix 3x3", () => {
    const testMatrix: InputSnake = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];

    const result = Snake(testMatrix);

    expect(result).toStrictEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
  });
  it("should return an array of matrix 4x4", () => {
    const testMatrix: InputSnake = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ];

    const result = Snake(testMatrix);

    expect(result).toStrictEqual([
      1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10,
    ]);
  });
  it("should return an array of matrix 5x5", () => {
    const testMatrix: InputSnake = [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25],
    ];

    const result = Snake(testMatrix);

    expect(result).toStrictEqual([
      1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19,
      18, 17, 12, 13,
    ]);
  });
});
