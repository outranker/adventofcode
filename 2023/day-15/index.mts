function readInput() {
    const t = Deno.readTextFileSync("2023/day-15/data-test.txt");
    const array: string[] = t.split(",");
    console.log("length: ", array.length);
    return array;
}
type MyParseType = string[];
function parse(input: string[]): MyParseType {
    return input;
}
type PartOneArgs = MyParseType;
function partOne(input: PartOneArgs) {
    let sumOne = 0;
    let startingVal = 0;
    for (let i = 0; i < input.length; i++) {
        const s = input[i];
        for (const letter of s) {
            startingVal += letter.charCodeAt(0);
            startingVal *= 17;
            startingVal = startingVal % 256;
        }

        sumOne += startingVal;
        console.log(startingVal);
        startingVal = 0;
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
// 508552

// submitted answers for part 2
