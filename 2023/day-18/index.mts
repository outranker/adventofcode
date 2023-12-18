function readInput() {
    const t = Deno.readTextFileSync("2023/day-18/data.txt");
    const array: string[] = t.split("\n");
    console.log("length: ", array.length);
    return array;
}
type MyParseType = [Direction, string, string][];
function parse(input: string[]): MyParseType {
    return input.map((line, _index) => {
        return line.split(" ") as MyParseType[number];
    });
}

type PartOneArgs = MyParseType;
const Directions = { left: "L", right: "R", up: "U", down: "D" } as const;
type Direction = (typeof Directions)[keyof typeof Directions];
function partOne(input: PartOneArgs) {
    const boundary = [];
    let currX = 0;
    let sumOne = 0;
    for (const [direction, depth, hexWithParentheses] of input) {
        if (direction === "D") {
        } else if (direction === "U") {
        } else {
        }
    }
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
// 3988 - too low

// submitted answers for part 2
