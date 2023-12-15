function readInput() {
    const t = Deno.readTextFileSync("2023/day-14/data-test.txt");
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
                    if (i === 0 && hold.length) {
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
                    if (dish[i][j] === "#") {
                        for (const holdIndex in hold) {
                            dish[i - +holdIndex - 1][j] = "O";
                        }
                        hold = [];
                    } else if (dish[i][j] === "O") {
                        hold.push("O");
                        dish[i][j] = ".";
                    }
                    if (i === 0 && hold.length) {
                        for (const holdIndex in hold) {
                            dish[i - +holdIndex][j] = "O";
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
function spinTheDishXCycles(dish: ParabolicReflectorDish, x = 3) {
    for (let i = 0; i < x; i++) {
        spinOneCycle(dish);
    }
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
    console.log("hello");
    spinTheDishXCycles(dish);
    printDish(structuredClone(dish));
    return calculateTheLoad(dish);
}
const data1 = readInput();
const data2 = parse(data1);
// console.log("Part One: ", partOne(structuredClone(data2)));
console.log("Part Two: ", partTwo(structuredClone(data2)));

// submitted answers for part 1
// 110779

// submitted answers for part 2
