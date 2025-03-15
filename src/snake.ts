export type InputSnake = number[][];
type ResultSnake = number[];
type Boundary = {
  top: number;
  bottom: number;
  left: number;
  right: number;
};
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

const getBoundary = (
  topDown: number,
  leftRight: number,
  squareBoundaries: Boundary
): boolean => {
  if (
    topDown >= squareBoundaries.top &&
    topDown < squareBoundaries.bottom &&
    leftRight >= squareBoundaries.left &&
    leftRight < squareBoundaries.right
  ) {
    return true;
  }
  return false;
};

export default function Snake(array: InputSnake): ResultSnake {
  const result: ResultSnake = [];
  const size = array.length;
  let squareBoundaries: Boundary = {
    top: 0,
    left: 0,
    right: size,
    bottom: size,
  };
  let flow: number = Direction.Right;
  let topDown = 0;
  let leftRight = 0;
  const updateDirection = () => {
    switch (flow) {
      case Direction.Right: {
        leftRight = squareBoundaries.right - 1;
        topDown++;
        squareBoundaries.top = topDown;
        flow = Direction.Down;
        break;
      }
      case Direction.Down: {
        topDown = squareBoundaries.bottom - 1;
        leftRight--;
        squareBoundaries.right = squareBoundaries.right - 1;
        flow = Direction.Left;
        break;
      }
      case Direction.Left: {
        leftRight = 0;
        topDown--;
        squareBoundaries.bottom = squareBoundaries.bottom - 1;
        flow = Direction.Up;
        break;
      }
      case Direction.Up: {
        squareBoundaries.left = squareBoundaries.left + 1;
        leftRight = squareBoundaries.left;
        topDown = squareBoundaries.top;
        flow = Direction.Right;
        break;
      }
    }
  };
  for (let i = 0; i < size * size; i++) {
    result.push(array[topDown][leftRight]);
    switch (flow) {
      case Direction.Right: {
        leftRight++;
        break;
      }
      case Direction.Down: {
        topDown++;
        break;
      }
      case Direction.Left: {
        leftRight--;
        break;
      }
      case Direction.Up: {
        topDown--;
        break;
      }
    }
    !getBoundary(topDown, leftRight, squareBoundaries) && updateDirection();
  }
  return result;
}
