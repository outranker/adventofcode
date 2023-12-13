function readInput() {
    const t = Deno.readTextFileSync("2023/day-11/data.txt");
    const array: string[] = t.split("\n");
    console.log("length: ", array.length);
    return array;
}
function parseValue(input: string[]): Universe {
    return input.map((line, _index) => {
        return line.split("");
    }) as Universe;
}
type Universe = Array<Array<"." | "#">>;
function findColsAndRowsThatExpands(universe: Universe) {
    const height = universe.length;
    const width = universe[0].length;
    const widthCoords: number[] = [];
    const heightCoords: number[] = [];
    for (let i = 0; i < height; i++) {
        let isEmpty = true;
        for (let k = 0; k < width; k++) {
            if (universe[i][k] !== ".") {
                isEmpty = false;
            }
        }
        if (isEmpty) widthCoords.push(i);
    }
    for (let j = 0; j < width; j++) {
        let isEmpty = true;
        for (let m = 0; m < height; m++) {
            if (universe[m][j] !== ".") isEmpty = false;
        }
        if (isEmpty) heightCoords.push(j);
    }
    widthCoords.sort((a, b) => b - a);
    heightCoords.sort((a, b) => b - a);
    return [widthCoords, heightCoords];
}
function expandUniverse(universe: Universe, x: number) {
    const width = universe[0].length;

    const [widthCoords, heightCoords] = findColsAndRowsThatExpands(universe);
    for (let n = 0; n < widthCoords.length; n++) {
        for (let w = 0; w < x; w++) {
            universe.splice(
                widthCoords[n],
                0,
                Array.from({ length: width }, () => new Array(".")) as unknown as Universe[number]
            );
        }
    }

    for (let p = 0; p < heightCoords.length; p++) {
        for (let v = universe.length - 1; v >= 0; v--) {
            for (let e = 0; e < x; e++) {
                universe[v].splice(heightCoords[p], 0, ".");
            }
        }
    }
    return universe;
}
function findHashCoordinates(universe: Universe) {
    const hashCoords: [number, number][] = [];
    for (let i = 0; i < universe.length; i++) {
        for (let j = 0; j < universe[i].length; j++) {
            if (universe[i][j] === "#") hashCoords.push([i, j]);
        }
    }
    return hashCoords;
}
function findPath(glxOne: [number, number], glxTwo: [number, number]) {
    const glxOneP1 = glxOne[0];
    const glxOneP2 = glxOne[1];

    const glxTwoP1 = glxTwo[0];
    const glxTwoP2 = glxTwo[1];

    let step = 0;
    step += Math.abs(glxOneP1 - glxTwoP1);
    step += Math.abs(glxOneP2 - glxTwoP2);
    return step;
}

function partOne(parsedValue: string[][]) {
    let sumOne = 0;
    const expandedUniverse = expandUniverse(parsedValue as Universe, 1);
    const hashCoords = findHashCoordinates(expandedUniverse);
    // printUniverseJustInCase(structuredClone(expandedUniverse));
    for (let t = 0; t < hashCoords.length - 1; t++) {
        for (let r = t; r < hashCoords.length; r++) {
            if (t !== r) {
                sumOne += findPath(hashCoords[t], hashCoords[r]);
            }
        }
    }
    return sumOne;
}

function expandUniverseHypothetically(
    universe: Universe,
    hashCoords: [number, number][],
    x = 10
): [number, number, [number, number][]] {
    let xLength = universe[0].length;
    let yLength = universe.length;
    const [widthCoords, heightCoords] = findColsAndRowsThatExpands(universe);
    for (const widthCoord of widthCoords) {
        for (const hashCoord of hashCoords) {
            if (hashCoord[0] > widthCoord) {
                hashCoord[0] += x - 1;
            }
        }
        yLength += x;
    }

    for (const heightCoord of heightCoords) {
        for (const hashCoord of hashCoords) {
            if (hashCoord[1] > heightCoord) {
                hashCoord[1] += x - 1;
            }
        }
        xLength += x;
    }

    return [xLength, yLength, hashCoords];
}

function partTwo(parsedValue: Universe) {
    let sumTwo = 0;
    const hashCoords = findHashCoordinates(parsedValue);
    const [xLength, yLength, hypotheticalHashCoords] = expandUniverseHypothetically(parsedValue, hashCoords, 1_000_000);
    console.log({ xLength, yLength });
    for (let t = 0; t < hashCoords.length - 1; t++) {
        for (let r = t; r < hashCoords.length; r++) {
            if (t !== r) {
                sumTwo += findPath(hypotheticalHashCoords[t], hypotheticalHashCoords[r]);
            }
        }
    }
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

console.log("Part One: ", partOne(structuredClone(parsedValue)));
console.log("Part Two: ", partTwo(structuredClone(parsedValue)));

// submitted answers for part 1
// 9543156

// submitted answers for part 2
// 625243292686
