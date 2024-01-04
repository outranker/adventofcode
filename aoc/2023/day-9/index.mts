function readInput() {
  const t = Deno.readTextFileSync("2023/day-9/data.txt");
  const array: string[] = t.split("\n");
  console.log("length: ", array.length);
  return array;
}
function parseValue(input: string[]) {
  return input.map((line, _index) => {
    return line
      .split(" ")
      .filter((l) => l !== "")
      .map(Number);
  });
}
function partOne(parsedValue: number[][]) {
  let sumOne = 0;
  parsedValue.forEach((line, _index) => {
    const numbers = line;

    let lineCurrent = numbers;
    const triangle: number[][] = [lineCurrent];
    let isAllZeros = false;

    while (!isAllZeros) {
      const someArr: number[] = [];
      for (let cursor = 0; cursor < lineCurrent.length - 1; cursor++) {
        const diffNum = lineCurrent[cursor + 1] - lineCurrent[cursor];
        someArr.push(diffNum);
      }
      lineCurrent = someArr;
      if (new Set(someArr).size === 1 && new Set(someArr).has(0)) {
        isAllZeros = true;
      }
      triangle.push(someArr);
    }
    let curr = 0;
    for (let i = triangle.length - 1; i >= 0; i--) {
      const t = triangle[i];
      if (t.at(-1) === 0) {
        curr = 0;
      } else {
        curr = t[i] + curr;
        sumOne += t.at(-1) as number;
        curr = t.at(-1) as number;
      }
    }
  });
  return sumOne;
}
function partTwo(parsedValue: number[][]) {
  let sumTwo = 0;
  parsedValue.forEach((line, _index) => {
    const numbers = line;

    let lineCurrent = numbers;
    const triangle: number[][] = [lineCurrent];
    let isAllZeros = false;

    while (!isAllZeros) {
      const someArr: number[] = [];
      for (let cursor = 0; cursor < lineCurrent.length - 1; cursor++) {
        const diffNum = lineCurrent[cursor + 1] - lineCurrent[cursor];
        someArr.push(diffNum);
      }
      lineCurrent = someArr;
      if (new Set(someArr).size === 1 && new Set(someArr).has(0)) {
        isAllZeros = true;
      }
      triangle.push(someArr);
    }
    let curr = 0;
    for (let i = triangle.length - 1; i >= 0; i--) {
      const t = triangle[i];
      if (i === triangle.length - 1) {
        curr = 0;
      } else {
        curr = t[0] - curr;
      }
      if (i === 0) {
        sumTwo += curr;
      }
    }
  });
  return sumTwo;
}
const parsedInput = readInput();
const parsedValue = parseValue(parsedInput);
// console.log("Part One: ", partOne([...parsedValue]));
console.log("Part Two: ", partTwo([...parsedValue]));
// ************** part 2 ***********

// submitted answers for part 1
// 2101499000

// submitted answers for part 2
// 21143
// 2127 -> too high
// 2
