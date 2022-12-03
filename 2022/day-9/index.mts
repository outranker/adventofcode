const t = await Deno.readTextFile("./data.txt");

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
