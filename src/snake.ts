export type InputSnake = number[][];
type ResultSnake = number[];
type Boundary = {
  top: number;
  bottom: number;
  left: number;
  right: number;
  updateBoundary: (key: keyof Omit<Boundary, "updateBoundary">) => void;
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
  boundaries: Boundary
): boolean => {
  if (
    topDown >= boundaries.top &&
    topDown < boundaries.bottom &&
    leftRight >= boundaries.left &&
    leftRight < boundaries.right
  ) {
    return true;
  }
  return false;
};

export default function Snake(array: InputSnake): ResultSnake {
  const result: ResultSnake = [];
  const size = array.length;
  const boundaries: Boundary = {
    top: 0,
    left: 0,
    right: size,
    bottom: size,
    updateBoundary: (key) => {
      const numberToUpdate = key === "top" || key === "left" ? 1 : -1;
      boundaries[key] = boundaries[key] + numberToUpdate;
    },
  };
  let flow = Direction.Right as Direction;
  let topDown = 0;
  let leftRight = 0;
  const updateDirection = () => {
    switch (flow) {
      case Direction.Right: {
        leftRight = boundaries.right - 1;
        topDown++;
        boundaries.updateBoundary("top");
        flow = Direction.Down;
        break;
      }
      case Direction.Down: {
        topDown = boundaries.bottom - 1;
        leftRight--;
        boundaries.updateBoundary("right");
        flow = Direction.Left;
        break;
      }
      case Direction.Left: {
        leftRight = boundaries.left;
        topDown--;
        boundaries.updateBoundary("bottom");
        flow = Direction.Up;
        break;
      }
      case Direction.Up: {
        boundaries.updateBoundary("left");
        leftRight = boundaries.left;
        topDown = boundaries.top;
        flow = Direction.Right;
        break;
      }
    }
    return;
  };
  const nextStep = () => {
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
    return;
  };
  for (let i = 0; i < size * size; i++) {
    //Adiciona elemento no array
    result.push(array[topDown][leftRight]);
    //Navega para a próxima casa seguindo a última orientação (Up, Down, Left, Right)
    nextStep();
    //Caso a coordenada X,Y no próximo item (leftRight,topDown) não exista na fronteira criada (squareBoundaries)
    //Atualiza a Direção - Atualiza a fronteira - Atualiza a coordenada
    !getBoundary(topDown, leftRight, boundaries) && updateDirection();
  }
  return result;
}
