const t = await Deno.readTextFile("2022/day-9/data.txt");
type Point = {
  x: number;
  y: number;
};
const head: Point = { x: 0, y: 0 };
const tail: Point = { x: 0, y: 0 };
type Direction = "U" | "D" | "R" | "L";

const shouldTailMove = () => {
  if (head.x === tail.x) {
    if (Math.abs(head.y - tail.y) > 1) {
      return true;
    }
    return false;
  }
  if (head.y === tail.y) {
    if (Math.abs(head.x - tail.x) > 1) {
      return true;
    }
    return false;
  }
  if (Math.abs(head.x - tail.x) === 1 && Math.abs(head.y - tail.y) === 1) {
    return false;
  }
  return true;
};
const shouldTailMoveDiagonally = () => {
  if (
    (Math.abs(head.x - tail.x) === 1 && Math.abs(head.y - tail.y) === 2) ||
    (Math.abs(head.x - tail.x) === 2 && Math.abs(head.y - tail.y) === 1)
  ) {
    return;
  }
};

// todo: sometimes, tail needs to move diagonally instead of plainly following directions
// todo: make a new function: isMoveDiagonal()
const makeAmove = (direction: Direction, isTail = false): string => {
  isTail && console.log(shouldTailMove());
  if (direction === "U") {
    if (isTail) {
      if (shouldTailMove()) {
        tail.y = tail.y + 1;
      }
      return `${tail.x}${tail.y}`;
    }
    head.y = head.y + 1;
    return `${head.x}${head.y}`;
  } else if (direction === "D") {
    if (isTail) {
      if (shouldTailMove()) {
        tail.y = tail.y - 1;
      }
      return `${tail.x}${tail.y}`;
    }
    head.y = head.y - 1;
    return `${head.x}${head.y}`;
  } else if (direction === "R") {
    if (isTail) {
      if (shouldTailMove()) {
        tail.x = tail.x + 1;
      }
      return `${tail.x}${tail.y}`;
    }
    head.x = head.x + 1;
    return `${head.x}${head.y}`;
  } else {
    if (isTail) {
      if (shouldTailMove()) {
        tail.x = tail.x - 1;
      }
      return `${tail.x}${tail.y}`;
    }
    head.x = head.x - 1;
    return `${head.x}${head.y}`;
  }
};

const saveTailLocation = (point: string) => {
  if (tailMovesList.at(-1) === point) {
    tailMovesList.push(point);
  }
};

const array = t.split("\n");
console.log("array:", array);
console.log("length:", array.length);
let index = 0;
const arrayLength = array.length;
const tailMovesList: string[] = [];
while (index !== arrayLength - 1) {
  const line = array[index];
  console.log("COMMAND line", line);
  const [direction, stepsString] = line.split(" ");
  let steps = Number(stepsString);
  console.log("before head", head);
  console.log("before tail", tail);
  while (steps !== 0) {
    console.log("steps", steps);
    makeAmove(direction as Direction);
    const s = makeAmove(direction as Direction, true);
    console.log("after head", head);
    console.log("after tail", tail);
    console.log(s);
    saveTailLocation(s);
    steps--;
  }
  index++;
  if (index === 5) {
    index = arrayLength - 1;
  }
}

console.log("result", tailMovesList.length);

/** already answered
 * pophbeab
 * PGPHBEAB
 */
