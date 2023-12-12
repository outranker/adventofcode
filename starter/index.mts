function readInput() {
  const t = Deno.readTextFileSync("2023/day-x/data.txt");
  const array: string[] = t.split("\n");
  console.log("length: ", array.length);
  return array;
}
function parseValue(input: string[]) {
  return input.map((line, _index) => {
    return line;
  });
}
type PartOneArgs = any;
function partOne(parsedValue: PartOneArgs) {
  let sumOne = 0;
  parsedValue.forEach((line, _index) => {});
  return sumOne;
}
type PartTwoArgs = any;
function partTwo(parsedValue: PartTwoArgs) {
  let sumTwo = 0;
  parsedValue.forEach((line, _index) => {});
  return sumTwo;
}
const parsedInput = readInput();
const parsedValue = parseValue(parsedInput);
console.log("Part One: ", partOne([...parsedValue]));
// console.log("Part Two: ", partTwo([...parsedValue]));
// ************** part 2 ***********

// submitted answers for part 1

// submitted answers for part 2
