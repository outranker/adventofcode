function readInput() {
    const t = Deno.readTextFileSync("2023/day-14/data.txt");
    const array: string[] = t.split("\n");
    console.log("length: ", array.length);
    return array;
}
type ParabolicReflectorDish = ("O" | "#" | ".")[][];
function parse(input: string[]): ParabolicReflectorDish {
    return input.map((line, _index) => {
        return line.split("") as ParabolicReflectorDish[number];
    });
}
const Direction = {
    north: "north",
    south: "south",
    east: "east",
    west: "west",
} as const;
function tiltTheDish(dish: ParabolicReflectorDish, direction: (typeof Direction)[keyof typeof Direction]) {
    const xLength = dish[0].length;
    const yLength = dish.length;
    switch (direction) {
        case Direction.north:
            for (let j = xLength - 1; j >= 0; j--) {
                let hold: Array<"O"> = [];
                for (let i = yLength - 1; i >= 0; i--) {
                    if (dish[i][j] === "#") {
                        for (const holdIndex in hold) {
                            dish[i + +holdIndex + 1][j] = "O";
                        }
                        hold = [];
                    } else if (dish[i][j] === "O") {
                        hold.push("O");
                        dish[i][j] = ".";
                    }
                    if (i === 0 && hold.length) {
                        for (const holdIndex in hold) {
                            dish[i + +holdIndex][j] = "O";
                        }
                    }
                }
            }
            break;
        case Direction.west:
            for (let j = 0; j < yLength; j++) {
                let hold: Array<"O"> = [];
                for (let i = xLength - 1; i >= 0; i--) {
                    if (dish[j][i] === "#") {
                        for (const holdIndex in hold) {
                            dish[j][i + +holdIndex + 1] = "O";
                        }
                        hold = [];
                    } else if (dish[j][i] === "O") {
                        hold.push("O");
                        dish[j][i] = ".";
                    }
                    if (i === 0 && hold.length) {
                        for (const holdIndex in hold) {
                            dish[j][i + +holdIndex] = "O";
                        }
                    }
                }
            }
            break;
        case Direction.south:
            for (let j = 0; j < xLength; j++) {
                let hold: Array<"O"> = [];
                for (let i = 0; i < yLength; i++) {
                    if (dish[i][j] === "#") {
                        for (const holdIndex in hold) {
                            dish[i - +holdIndex - 1][j] = "O";
                        }
                        hold = [];
                    } else if (dish[i][j] === "O") {
                        hold.push("O");
                        dish[i][j] = ".";
                    }
                    if (i === yLength - 1 && hold.length) {
                        for (const holdIndex in hold) {
                            dish[i - +holdIndex][j] = "O";
                        }
                    }
                }
            }
            break;
        case Direction.east:
            for (let j = 0; j < yLength; j++) {
                let hold: Array<"O"> = [];
                for (let i = 0; i < xLength; i++) {
                    if (dish[j][i] === "#") {
                        for (const holdIndex in hold) {
                            dish[j][i - +holdIndex - 1] = "O";
                        }
                        hold = [];
                    } else if (dish[j][i] === "O") {
                        hold.push("O");
                        dish[j][i] = ".";
                    }
                    if (i === xLength - 1 && hold.length) {
                        for (const holdIndex in hold) {
                            dish[j][i - +holdIndex] = "O";
                        }
                    }
                }
            }
            break;
    }
}
function spinOneCycle(dish: ParabolicReflectorDish) {
    tiltTheDish(dish, Direction.north);
    tiltTheDish(dish, Direction.west);
    tiltTheDish(dish, Direction.south);
    tiltTheDish(dish, Direction.east);
}
function spinTheDishXCyclesWithImageMap(dish: ParabolicReflectorDish, x = 100_000) {
    const m: Map<string, number> = new Map();
    for (let i = 0; i < x; i++) {
        spinOneCycle(dish);
        const img = getTheDishImageMap(dish);
        if (m.has(img)) {
            return [m.get(img) as number, i];
        }
        m.set(img, i);
    }
}
function spinTheDishXCycles(dish: ParabolicReflectorDish, x: number) {
    for (let i = 0; i < x; i++) {
        spinOneCycle(dish);
    }
    return dish;
}
function getTheDishImageMap(dish: ParabolicReflectorDish) {
    let s = "";
    for (const d of dish) {
        s += d.join("") + "\n";
    }
    return s;
}
function calculateTheLoad(dish: ParabolicReflectorDish) {
    let s = 0;
    const yLength = dish.length;
    for (const multiplier in dish) {
        for (const dishSquare of dish[multiplier]) {
            if (dishSquare === "O") {
                s += yLength - +multiplier;
            }
        }
    }
    return s;
}
function printDish(dish: ParabolicReflectorDish) {
    console.log(
        dish.reduce((acc, curr) => {
            acc += curr.join("") + "\n";
            return acc;
        }, "")
    );
}
type PartOneArgs = ParabolicReflectorDish;
function partOne(dish: PartOneArgs) {
    tiltTheDish(dish, Direction.north);
    return calculateTheLoad(dish);
}
type PartTwoArgs = ParabolicReflectorDish;
function partTwo(dish: PartTwoArgs) {
    const [patternStarts, patternEnds] = spinTheDishXCyclesWithImageMap(structuredClone(dish))!;
    return calculateTheLoad(spinTheDishXCycles(dish, (1_000_000_000 - patternStarts) % (patternEnds - patternStarts)));
}
const data1 = readInput();
const data2 = parse(data1);
// console.log("Part One: ", partOne(structuredClone(data2)));
console.log("Part Two: ", partTwo(structuredClone(data2)));

// submitted answers for part 1
// 110779

// submitted answers for part 2
// 86090 -> too high
// 86076 -> too high
// 86064 -> too low
// 86069 -> correct answer. couldn't find this answer using coding. i observed the repeating pattern and randomly posted the inputs
// aoc told me whether answer is too low or too high. that's how i got the anwer
// 86069 -> finally worked out the solution after getting some hints from reddit
