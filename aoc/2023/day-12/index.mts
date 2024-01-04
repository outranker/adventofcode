function readInput() {
    const t = Deno.readTextFileSync("2023/day-x/data.txt");
    const array: string[] = t.split("\n");
    console.log("length: ", array.length);
    return array;
}
type MyParseType = string[];
function parse(input: string[]): MyParseType {
    return input.map((line, _index) => {
        return line;
    });
}
type PartOneArgs = any;
function partOne(parsedValue: PartOneArgs) {
    let sumOne = 0;
    return sumOne;
}
type PartTwoArgs = any;
function partTwo(parsedValue: PartTwoArgs) {
    let sumTwo = 0;
    return sumTwo;
}
const data1 = readInput();
const data2 = parse(data1);
console.log("Part One: ", partOne(structuredClone(data2)));
// console.log("Part Two: ", partTwo(structuredClone(parsedValue)));

// submitted answers for part 1

// submitted answers for part 2
