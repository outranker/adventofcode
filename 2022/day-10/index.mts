// const t = await Deno.readTextFile("./data.txt");

// const array = t.split("\n");
// console.log("length:", array.length);
// let X = 1;

// const cycleRecords: number[] = [];
// for (let i = 0; i < array.length; i++) {
//   const element = array[i];
//   const [instruction, value] = element.split(" ");

//   if (instruction === "noop") {
//     console.log(instruction, " ", X);
//     cycleRecords.push(X);
//   } else {
//     console.log(instruction, value, X);
//     cycleRecords.push(X);
//     cycleRecords.push(X);
//     X = X + Number(value);
//   }
// }
// console.log(cycleRecords);
// console.log(
//   cycleRecords[20 - 1] * 20,
//   cycleRecords[60 - 1] * 60,
//   cycleRecords[100 - 1] * 100,
//   cycleRecords[140 - 1] * 140,
//   cycleRecords[180 - 1] * 180,
//   cycleRecords[220 - 1] * 220
// );
// console.log(
//   cycleRecords[20 - 1],
//   cycleRecords[60 - 1],
//   cycleRecords[100 - 1],
//   cycleRecords[140 - 1],
//   cycleRecords[180 - 1],
//   cycleRecords[220 - 1]
// );
// console.log(
//   cycleRecords[20 - 1] * 20 +
//     cycleRecords[60 - 1] * 60 +
//     cycleRecords[100 - 1] * 100 +
//     cycleRecords[140 - 1] * 140 +
//     cycleRecords[180 - 1] * 180 +
//     cycleRecords[220 - 1] * 220
// );

// /** already answered
//  * 7640
//  * 9740
//  * 14360
//  * 13520
//  */

// below is part 2

const t = await Deno.readTextFile("./data.txt");
// const t = `addx 15
// addx -11
// addx 6
// addx -3
// addx 5
// addx -1
// addx -8
// addx 13
// addx 4
// noop
// addx -1
// addx 5
// addx -1
// addx 5
// addx -1
// addx 5
// addx -1
// addx 5
// addx -1
// addx -35
// addx 1
// addx 24
// addx -19
// addx 1
// addx 16
// addx -11
// noop
// noop
// addx 21
// addx -15
// noop
// noop
// addx -3
// addx 9
// addx 1
// addx -3
// addx 8
// addx 1
// addx 5
// noop
// noop
// noop
// noop
// noop
// addx -36
// noop
// addx 1
// addx 7
// noop
// noop
// noop
// addx 2
// addx 6
// noop
// noop
// noop
// noop
// noop
// addx 1
// noop
// noop
// addx 7
// addx 1
// noop
// addx -13
// addx 13
// addx 7
// noop
// addx 1
// addx -33
// noop
// noop
// noop
// addx 2
// noop
// noop
// noop
// addx 8
// noop
// addx -1
// addx 2
// addx 1
// noop
// addx 17
// addx -9
// addx 1
// addx 1
// addx -3
// addx 11
// noop
// noop
// addx 1
// noop
// addx 1
// noop
// noop
// addx -13
// addx -19
// addx 1
// addx 3
// addx 26
// addx -30
// addx 12
// addx -1
// addx 3
// addx 1
// noop
// noop
// noop
// addx -9
// addx 18
// addx 1
// addx 2
// noop
// noop
// addx 9
// noop
// noop
// noop
// addx -1
// addx 2
// addx -37
// addx 1
// addx 3
// noop
// addx 15
// addx -21
// addx 22
// addx -6
// addx 1
// noop
// addx 2
// addx 1
// noop
// addx -10
// noop
// noop
// addx 20
// addx 1
// addx 2
// addx 2
// addx -6
// addx -11
// noop
// noop
// noop`;

const array = t.split("\n");
console.log("length:", array.length);
let X = 1;

const cycleRecords: number[] = [];
for (let i = 0; i < array.length; i++) {
  const element = array[i];
  const [instruction, value] = element.split(" ");

  if (instruction === "noop") {
    console.log(instruction, " ", X);
    cycleRecords.push(X);
  } else {
    console.log(instruction, value, X);
    cycleRecords.push(X);
    cycleRecords.push(X);
    X = X + Number(value);
  }
}
console.log(cycleRecords);
let string = "";
let spritePosition = 0;
// let temp = ''
for (let i = 0; i < cycleRecords.length; i++) {
  const currentCycleVal = cycleRecords[i];
  let currentCycleNo = i + 1;
  if (currentCycleNo % 40 === 0) {
    currentCycleNo = 40;
  } else {
    currentCycleNo = currentCycleNo % 40;
  }

  spritePosition = currentCycleVal;
  // console.log("spritePosition", spritePosition);
  console.log("currentCycleNo", currentCycleNo);
  if (
    currentCycleNo === spritePosition ||
    currentCycleNo === spritePosition + 1 ||
    currentCycleNo === spritePosition + 2
  ) {
    string += "#";
  } else {
    string += " ";
  }

  if (string.length % 40 === 0) {
    // temp
    // string += "\n";
  }
}
console.log(string);
console.log("\n".length);
/** already answered
 * pophbeab
 * PGPHBEAB
 */
