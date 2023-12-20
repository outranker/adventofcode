import transform from "https://deno.land/x/lodash@4.17.15-es/transform.js";

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
function expandWesternTrenches(trench: TrenchMap, coords: Coords, steps: number) {
    for (let i = 0; i < trench.length; i++) {
        for (let j = 0; j < steps; j++) {
            if (i === coords.currY) {
                trench[i].unshift("#");
            } else {
                trench[i].unshift(".");
            }
        }
    }
    coords.currX = 0;
}
function expandNorthernTrenches(trench: TrenchMap, coords: Coords, steps: number) {
    for (let j = 0; j < steps; j++) {
        trench.unshift([] as unknown as TrenchMap[number]);
        for (let i = 0; i < trench[1].length; i++) {
            if (i === coords.currX) {
                trench[0].push("#");
            } else {
                trench[0].push(".");
            }
        }
    }
    coords.currY = 0;
}
function expandEasternTrenches(trench: TrenchMap, coords: Coords, steps: number) {
    for (let i = 0; i < trench.length; i++) {
        for (let j = 0; j < steps; j++) {
            if (i === coords.currY) {
                trench[i].push("#");
            } else {
                trench[i].push(".");
            }
        }
    }

    coords.currX = trench[0].length - 1;
}
function expandSouthernTrenches(trench: TrenchMap, coords: Coords, steps: number) {
    for (let j = 0; j < steps; j++) {
        trench.push([] as unknown as TrenchMap[number]);
        for (let i = 0; i < trench[0].length; i++) {
            if (coords.currX === i) {
                trench.at(-1)!.push("#");
            } else {
                trench.at(-1)!.push(".");
            }
        }
    }
    coords.currY = trench.length - 1;
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
type PartOneArgs = MyParseType;
const Directions = { left: "L", right: "R", up: "U", down: "D" } as const;
type Direction = (typeof Directions)[keyof typeof Directions];
type Coords = Record<"currX" | "currY", number>;
function partOne(input: PartOneArgs) {
    let sumOne = 0;
    const trenchWarfare: TrenchMap = [[] as unknown as TrenchMap[number]];
    const coords: Coords = {
        currX: 0,
        currY: 0,
    };
    for (const [direction, depth] of input) {
        if (direction === "D") {
            let d = +depth;
            if (coords.currY !== trenchWarfare.length - 1) {
                for (let i = 0; i < trenchWarfare.length - 1; i++) {
                    trenchWarfare[coords.currY + 1][coords.currX] = "#";
                    coords.currY++;
                    d--;
                    if (d === 0) break;
                }
            }
            if (d !== 0) {
                expandSouthernTrenches(trenchWarfare, coords, d);
            }
        } else if (direction === "U") {
            let d = +depth;
            if (coords.currY !== 0) {
                for (let i = coords.currY - 1; i >= 0; i--) {
                    trenchWarfare[i][coords.currX] = "#";
                    coords.currY--;
                    d--;
                    if (d === 0) break;
                }
            }
            if (d !== 0) {
                expandNorthernTrenches(trenchWarfare, coords, d);
            }
        } else if (direction === "L") {
            let d = +depth;
            if (coords.currX !== 0) {
                for (let i = coords.currX - 1; i >= 0; i--) {
                    trenchWarfare[coords.currY][i] = "#";
                    coords.currX--;
                    d--;
                    if (d === 0) break;
                }
            }
            if (d !== 0) {
                expandWesternTrenches(trenchWarfare, coords, +depth);
            }
        } else {
            // R
            let d = +depth;
            if (coords.currX !== trenchWarfare[0].length - 1) {
                for (let i = coords.currX + 1; i <= trenchWarfare[0].length - 1; i++) {
                    trenchWarfare[coords.currY][i] = "#";
                    coords.currX++;
                    d--;
                    if (d === 0) break;
                }
            }
            if (+depth === 5) console.log({ x: coords.currX, y: coords.currY });
            if (d !== 0) {
                expandEasternTrenches(trenchWarfare, coords, +depth);
            }

            if (+depth === 5) console.log({ x: coords.currX, y: coords.currY });
        }
        printTrenchMapJustInCase(trenchWarfare);
        console.log("hello");
    }
    sumOne += calculateTrenchArea(trenchWarfare);
    return sumOne;
}
function printTrenchMapJustInCase(trench: TrenchMap) {
    let m = "";
    for (const line of trench) {
        m += line.join("") + "\n";
    }
    Deno.writeFileSync("map.txt", new TextEncoder().encode(m));
    // console.log(m);
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
