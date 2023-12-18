function readInput() {
    const t = Deno.readTextFileSync("2023/day-15/data.txt");
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
        startingVal = 0;
    }
    return sumOne;
}
function getTheBoxNumberAndOtherInfo(step: string): [number, "=" | "-", number, string] {
    let label = "";
    let boxNumber = 0;
    let operation: "=" | "-" = "-";
    let focalLength = 0;
    let flag = false;
    for (const letter of step) {
        if (letter === "=" || letter === "-") {
            operation = letter;
            flag = true;
            continue;
        }
        if (flag) {
            focalLength = +letter;
            continue;
        }
        label += letter;
        boxNumber += letter.charCodeAt(0);
        boxNumber *= 17;
        boxNumber = boxNumber % 256;
    }
    return [boxNumber, operation, +focalLength, label];
}
type MapValue = { label: string; focalLength: number };
function getByLabel(boxes: MapValue[], label: string) {
    return boxes.findIndex((item) => item.label === label);
}
function deleteByIndex(arry: MapValue[], index: number) {
    return arry.splice(index, 1);
}
type Box = Map<number, MapValue[]>;
type PartTwoArgs = MyParseType;
function partTwo(input: PartTwoArgs) {
    let sumTwo = 0;
    const boxes: Box = new Map();

    for (let i = 0; i < input.length; i++) {
        const info = getTheBoxNumberAndOtherInfo(input[i]);
        const [boxNumber, operation, focalLength, label] = info;
        if (operation === "=") {
            if (boxes.has(boxNumber)) {
                const currentBox = boxes.get(boxNumber) as MapValue[];
                const lensIndex = getByLabel(currentBox, label);
                if (lensIndex !== -1) {
                    currentBox[lensIndex].focalLength = focalLength;
                } else {
                    currentBox.push({ label, focalLength });
                }
            } else {
                boxes.set(boxNumber, [{ label, focalLength }]);
            }
        } else {
            if (boxes.has(boxNumber)) {
                const currentBox = boxes.get(boxNumber) as MapValue[];
                const lensIndex = getByLabel(currentBox, label);

                if (lensIndex !== -1) {
                    deleteByIndex(currentBox, lensIndex);
                }
            } else {
                // do nothing
            }
        }
    }

    boxes.forEach((value, key) => {
        sumTwo += value.reduce((acc, curr, idx) => {
            acc += (key + 1) * +curr.focalLength * (idx + 1);
            return acc;
        }, 0);
    });

    return sumTwo;
}
const data1 = readInput();
const data2 = parse(data1);
// console.log("Part One: ", partOne(structuredClone(data2)));
console.log("Part Two: ", partTwo(structuredClone(data2)));

// submitted answers for part 1
// 508552

// submitted answers for part 2
