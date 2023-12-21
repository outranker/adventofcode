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
        for (let j = 0; j < trench[i].length; j++) {
            if (trench[i][j] === "#" || trench[i][j] === ".") {
                t++;
            }
        }
    }
    return t;
}
function paintOutsideTheBorders(trench: TrenchMap) {
    for (let i = 0; i < trench.length; i++) {
        for (let j = 0; j < trench[0].length; j++) {
            if (trench[i][j] === ".") {
                trench[i][j] = "0";
            } else break;
        }
    }
    for (let i = 0; i < trench[0].length; i++) {
        for (let j = 0; j < trench.length; j++) {
            if (trench[j][i] === "." || trench[j][i] === "0") {
                trench[j][i] = "0";
            } else break;
        }
    }
    // from right to left
    for (let j = 0; j < trench.length; j++) {
        for (let i = trench[0].length - 1; i >= 0; i--) {
            if (trench[j][i] === "." || trench[j][i] === "0") {
                trench[j][i] = "0";
            } else break;
        }
    }
    for (let i = 0; i < trench[0].length; i++) {
        for (let j = trench.length - 1; j >= 0; j--) {
            if (trench[j][i] === "." || trench[j][i] === "0") {
                trench[j][i] = "0";
            } else break;
        }
    }
}
function isThisFloodFill(trench: TrenchMap) {
    let cp = 0;
    let stop = false;
    while (stop === false) {
        let encountered = false;
        for (let i = 0; i < trench.length; i++) {
            for (let j = 0; j < trench[0].length; j++) {
                if (trench[i][j] === "0") {
                    if (trench[i][j - 1] === ".") {
                        trench[i][j - 1] = "0";
                        encountered = true;
                    } else if (trench[i][j + 1] === ".") {
                        trench[i][j + 1] = "0";
                        encountered = true;
                    } else if (trench[i - 1]?.[j] === ".") {
                        trench[i - 1]?.[j] && (trench[i - 1][j] = "0");
                        encountered = true;
                    } else if (trench[i + 1]?.[j] === ".") {
                        trench[i + 1]?.[j] && (trench[i + 1][j] = "0");
                        encountered = true;
                    }
                }
            }
        }
        if (encountered === false) {
            stop = true;
        }
        cp++;
        if (cp % 10_000 === 0) console.log(cp);
    }
}
function digUpTrenches2(trenchWarfare: TrenchMap, coords: Coords, input: PartOneArgs) {
    let cc = 0;
    const vertices: [number, number][] = [];
    for (const [direction, depth] of input) {
        if (direction === "D") {
            const d = +depth;
            coords.currY += d;
        } else if (direction === "U") {
            const d = +depth;
            coords.currY -= d;
            vertices;
        } else if (direction === "L") {
            const d = +depth;
            coords.currX -= d;
        } else {
            // R
            const d = +depth;
            coords.currX += d;
        }
        cc++;
        vertices.push([coords.currX, coords.currY]);
    }
    return vertices;
}
function digUpTrenches(trenchWarfare: TrenchMap, coords: Coords, input: PartOneArgs) {
    let cc = 0;
    const vertices: [number, number][] = [];
    for (const [direction, depth] of input) {
        if (cc % 10 === 0) console.log(cc);
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
                expandWesternTrenches(trenchWarfare, coords, d);
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
            if (d !== 0) {
                expandEasternTrenches(trenchWarfare, coords, d);
            }
        }
        cc++;
        vertices.push([coords.currX, coords.currY]);
    }
    return vertices;
}
type TrenchMap = ["." | "#" | "0"][];
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
    digUpTrenches(trenchWarfare, coords, input);
    paintOutsideTheBorders(trenchWarfare);
    isThisFloodFill(trenchWarfare);
    printTrenchMapJustInCase(trenchWarfare, "map2.txt");
    sumOne += calculateTrenchArea(trenchWarfare);
    return sumOne;
}
function printTrenchMapJustInCase(trench: TrenchMap, filename: string) {
    let m = "";
    for (const line of trench) {
        m += line.join("") + "\n";
    }
    Deno.writeFileSync(filename, new TextEncoder().encode(m));
    // console.log(m);
}
function convertHexToMapDirections(input: PartTwoArgs) {
    const newInput: MyParseType = [];
    let c = 0;
    for (const [direction, depth, hex] of input) {
        newInput.push([] as unknown as MyParseType[number]);
        if (hex.at(-2)! === "0") {
            newInput[c].push(Directions.right);
        } else if (hex.at(-2) === "1") {
            newInput[c].push(Directions.down);
        } else if (hex.at(-2) === "2") {
            newInput[c].push(Directions.left);
        } else {
            newInput[c].push(Directions.up);
        }
        newInput[c].push("" + parseInt(hex.slice(2, 7), 16));
        c++;
    }
    return newInput;
}
function shoelaces(vertices: ReturnType<typeof digUpTrenches>) {
    let sum = 0;
    for (let i = 0; i < vertices.length - 1; i++) {
        sum += ((vertices[i + 1][0] - vertices[i][0]) * (vertices[i + 1][1] + vertices[i][1])) / 2;
    }
    return sum;
    let area = 0;
    for (let i = 0; i < vertices.length - 1; i++) {
        area += vertices[i][0] * vertices[i + 1][1] - vertices[i][1] * vertices[i + 1][0];
    }
    return area;
}
type PartTwoArgs = PartOneArgs;
function partTwo(parsedValue: PartTwoArgs) {
    let sumTwo = 0;
    const trenchWarfare: TrenchMap = [[] as unknown as TrenchMap[number]];
    const coords: Coords = { currX: 0, currY: 0 };
    const input = convertHexToMapDirections(parsedValue);
    console.log(input);
    const vertices = digUpTrenches2(trenchWarfare, coords, input);
    console.log(JSON.stringify(vertices, null, 2));
    // we need to remove the first one since we don't know if it's a corner or not
    // vertices.shift();
    vertices.pop();
    sumTwo = shoelaces(vertices);

    return sumTwo;
}
const data1 = readInput();
const data2 = parse(data1);
// console.log("Part One: ", partOne(structuredClone(data2)));
console.log("Part Two: ", partTwo(structuredClone(data2)));

// submitted answers for part 1
// 50005 - too low
// 19274 - too low
// 55169 - wrong answer
// 66993 - correct answer

// submitted answers for part 2
// 354487289353734 - too high
// 354491768799110 - too high
// 177243644676867
