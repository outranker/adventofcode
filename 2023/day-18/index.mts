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
// trenchWarefare[y][x];
function expandWesternTrenches(trench: TrenchMap, currX: dX, currY: dY, steps: number) {
    for (let i = 0; i < trench.length; i++) {
        for (let j = 0; j < steps; j++) {
            if (i === currY) {
                trench[i].unshift("#");
            } else {
                trench[i].unshift(".");
            }
        }
    }
}
function expandNorthernTrenches(trench: TrenchMap, currX: dX, currY: dY, steps: number) {
    for (let j = 0; j < steps; j++) {
        trench.unshift([] as unknown as TrenchMap[number]);
        for (let i = 0; i < trench[1].length; i++) {
            if (i === currX) {
                trench[0].unshift("#");
            } else {
                trench[0].unshift(".");
            }
        }
    }
}
function expandEasternTrenches(trench: TrenchMap, currX: dX, currY: dY, steps: number) {
    for (let i = 0; i < trench.length; i++) {
        for (let j = 0; j < steps; j++) {
            if (i === currY) {
                trench[i].push("#");
            } else {
                trench[i].push(".");
            }
        }
    }
}
function expandSouthernTrenches(trench: TrenchMap, currX: dX, currY: dY, steps: number) {
    for (let j = 0; j < steps; j++) {
        trench.push([] as unknown as TrenchMap[number]);
        for (let i = 0; i < trench[0].length; i++) {
            if (currX === i) {
                trench.at(-1)!.push("#");
            } else {
                trench.at(-1)!.push(".");
            }
        }
    }
}
function calculateTrenchArea(trench: TrenchMap) {
    let t = 0;

    for (let i = 0; i < trench.length; i++) {
        let a = 0;
        let s = undefined;
        let e = undefined;
        for (let j = 0; j < trench[i].length; j++) {
            if (trench[i][j] === "#") {
                if (s === undefined) {
                    s = j;
                } else {
                    if (trench[i][j + 1] !== "#") {
                        e = j;
                        t += e - s + 1;
                        s = undefined;
                        e = undefined;
                        a++;
                    }
                }
            }
        }
        if (a > 5) console.log(a);
        // console.log(arr);
    }
    return t;
}
type TrenchMap = ["." | "#"][];
type dX = number;
type dY = number;
type PartOneArgs = MyParseType;
const Directions = { left: "L", right: "R", up: "U", down: "D" } as const;
type Direction = (typeof Directions)[keyof typeof Directions];
function partOne(input: PartOneArgs) {
    let sumOne = 0;
    const trenchWarfare: TrenchMap = [[] as unknown as TrenchMap[number]];
    let currX: dX = 0;
    let currY: dY = 0;
    for (const [direction, depth, hexWithParentheses] of input) {
        if (direction === "D") {
            let d = +depth;
            let canGoDownSteps = trenchWarfare.length - 1 - currY;
            if (currY !== 0) {
                for (let i = 0; i < canGoDownSteps; i++) {
                    trenchWarfare[currY][currX] = "#";
                    currY++;
                    d--;
                    if (d === 0) break;
                }
            }
            if (d !== 0) {
                expandSouthernTrenches(trenchWarfare, currX, currY, d);
                currY = trenchWarfare.length - 1;
            }
        } else if (direction === "U") {
            let d = +depth;
            if (currY !== 0) {
                for (let i = currY - 1; i >= 0; i--) {
                    trenchWarfare[i][currX] = "#";
                    currY--;
                    d--;
                    if (d === 0) break;
                }
            }
            if (d !== 0) {
                expandNorthernTrenches(trenchWarfare, currX, currY, d);
                currY = 0;
            }
        } else if (direction === "L") {
            let d = +depth;
            if (currX !== 0) {
                for (let i = currX - 1; i >= 0; i--) {
                    trenchWarfare[currY][i] = "#";
                    currX--;
                    d--;
                    if (d === 0) break;
                }
            }
            if (d !== 0) {
                expandWesternTrenches(trenchWarfare, currX, currY, +depth);
                currX = 0;
            }
        } else {
            // R
            let d = +depth;
            if (currX !== trenchWarfare[0].length - 1) {
                for (let i = currX + 1; i <= trenchWarfare[0].length - 1; i++) {
                    trenchWarfare[currY][i] = "#";
                    currX++;
                    d--;
                    if (d === 0) break;
                }
            }
            if (+depth === 5) console.log({ currX, currY });
            if (d !== 0) {
                expandEasternTrenches(trenchWarfare, currX, currY, +depth);
                currX = trenchWarfare[0].length - 1;
            }

            if (+depth === 5) console.log({ currX, currY });
        }
    }
    // printTrenchMapJustInCase(trenchWarfare);
    sumOne += calculateTrenchArea(trenchWarfare);
    return sumOne;
}
function printTrenchMapJustInCase(trench: TrenchMap) {
    let m = "";
    for (const line of trench) {
        m += line.join("") + "\n";
    }
    Deno.writeFileSync("map.txt", new TextEncoder().encode(m));
    console.log(m);
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
// 50005 - too low
// 19274 - too low

// submitted answers for part 2
