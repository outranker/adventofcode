const t = await Deno.readTextFile("2023/day-8/data.txt");

const array: string[] = t.split("\n");
console.log(array.length);
type Left = string;
type Right = string;
let map: Record<string, [Left, Right]> = {};
let s = 0;
let instructions: string = "";
// array.forEach((line, index) => {
//   if (index >= 2) {
//     const l = line
//       .replace("(", "")
//       .replace(")", "")
//       .replaceAll(" ", "")
//       .split("=");
//     console.log(l);
//     map[l[0]] = l[1].split(",") as (typeof map)[number];
//   } else {
//     if (index === 0) {
//       instructions = line;
//     }
//   }
// });
// let isFound = false;
// let count = 0;
// instructions = (instructions as string).repeat(100000);
// const instructionsList = instructions.split("");
// let nextStep = "AAA";
// while (!isFound) {
//   if (instructionsList[count] === "L") {
//     nextStep = map[nextStep][0];
//   } else {
//     nextStep = map[nextStep][1];
//   }
//   if (nextStep === "ZZZ") isFound = true;
//   count++;
// }
// console.log(count);
// console.log(instructions.length);
// ************** part 2 ***********
array.forEach((line, index) => {
  if (index >= 2) {
    const l = line
      .replace("(", "")
      .replace(")", "")
      .replaceAll(" ", "")
      .split("=");
    map[l[0]] = l[1].split(",") as (typeof map)[number];
  } else {
    if (index === 0) {
      instructions = line;
    }
  }
});
let isFound = false;
let count = 0;
let index = 0;
instructions = instructions as string;
const instructionsList = instructions.split("");
const nextNodes = [Object.keys(map).filter((key) => key.endsWith("A"))];
console.log(nextNodes);
function allEndsWithZ(a: string[]) {
  let zCount = 0;
  for (let i = 0; i < a.length; i++) {
    const element = array[i];
    if (element.endsWith("Z")) zCount++;
  }
  if (zCount === a.length) return true;
  return false;
}

while (!isFound) {
  console.log(index, count);
  if (instructionsList[index] === "L") {
    const n = nextNodes.at(-1) as string[];
    const push = nextNodes.length;
    nextNodes.push([]);
    for (let i = 0; i < n.length; i++) {
      const node = n[i];
      nextNodes.at(push)?.push(map[node][0]);
    }
  } else {
    const n = nextNodes.at(-1) as string[];
    const push = nextNodes.length;
    nextNodes.push([]);
    for (let i = 0; i < n.length; i++) {
      const node = n[i];
      nextNodes.at(push)?.push(map[node][1]);
    }
  }

  if (allEndsWithZ(nextNodes.at(-1) as string[])) isFound = true;
  count++;
  if (index === instructions.length - 1) index = 0;
  else index++;
  nextNodes.shift();
}
console.log(count);
console.log(instructions.length);
// submitted answers for part 1
// 284
// 2698
// 19099

// submitted answers for part 2

// 66616765 -> too low. meaning it is going to run for a long time
// 122300490 -> too low as well.
