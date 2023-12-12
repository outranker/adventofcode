function readInput() {
  const t = Deno.readTextFileSync("2023/day-11/data.txt");
  const array: string[] = t.split("\n");
  console.log("length: ", array.length);
  return array;
}
function parseValue(input: string[]) {
  return input.map((line, _index) => {
    return line.split("");
  });
}
type Universe = Array<Array<"." | "#">>;
function expandUniverse(universe: Universe) {
  const height = universe.length;
  const width = universe[0].length;
  const widthCoords: number[] = [];
  const heightCoords: number[] = [];
  for (let i = 0; i < height - 1; i++) {
    let isEmpty = true;
    for (let k = 0; k < width - 1; k++) {
      if (universe[i][k] !== ".") isEmpty = false;
    }
    if (isEmpty) widthCoords.push(i);
  }
  for (let j = 0; j < width - 1; j++) {
    let isEmpty = true;
    for (let m = 0; m < height - 1; m++) {
      if (universe[m][j] !== ".") isEmpty = false;
    }
    if (isEmpty) heightCoords.push(j);
  }
  for (let n = 0; n < widthCoords.length; n++) {
    universe.splice(
      widthCoords[n],
      0,
      Array.from(
        { length: width },
        () => new Array(".")
      ) as unknown as Universe[number]
    );
  }
  for (let p = 0; p < heightCoords.length; p++) {
    for (let v = 0; v < universe.length; v++) {
      universe[v].splice(heightCoords[p], 0, ".");
    }
  }
  console.log({ widthCoords, heightCoords });
  return universe;
}

function findPath(a: any, b: any) {}

function partOne(parsedValue: string[][]) {
  let sumOne = 0;
  const expandedUniverse = expandUniverse(parsedValue as Universe);
  console.log(expandedUniverse.length);
  // printUniverseJustInCase(structuredClone(expandedUniverse));
  // parsedValue.forEach((line: string, _index: number) => {});
  return sumOne;
}

function partTwo(parsedValue: any) {
  let sumTwo = 0;
  parsedValue.forEach((line: string, _index: number) => {});
  return sumTwo;
}

function printUniverseJustInCase(universe: Universe) {
  let u = "";
  for (let s = 0; s < universe.length; s++) {
    const element = universe[s];
    u = (u + element.join("") + "\n") as string;
  }
  console.log(u);
}

const parsedInput = readInput();
const parsedValue = parseValue(parsedInput);

console.log("Part One: ", partOne([...parsedValue]));
// console.log("Part Two: ", partTwo([...parsedValue]));

// ************** part 2 ***********

// submitted answers for part 1

// submitted answers for part 2
