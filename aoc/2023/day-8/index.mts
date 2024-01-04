const t = await Deno.readTextFile("2023/day-8/data.txt");
import getAllKeys from "https://deno.land/x/lodash@4.17.15-es/_getAllKeys.js";
import { isEqual } from "https://deno.land/x/lodash@4.17.15-es/lodash.js";

const array: string[] = t.split("\n");
console.log(array.length);
type Left = string;
type Right = string;
// let map: Record<string, [Left, Right]> = {};
let map: Record<string, [string, string]> = {};
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
    map[l[0]] = l[1].split(",") as [string, string];
  } else {
    if (index === 0) {
      instructions = line;
    }
  }
});
instructions = instructions as string;
const instructionsList = instructions.split("");
const firstNode: string[] = Object.keys(map).filter((key) => key.endsWith("A"));

let found = [];
const allZ = Object.keys(map).filter((key) => key.endsWith("Z"));
console.log(Object.keys(map).filter((key) => key.endsWith("A")));
console.log(Object.keys(map).filter((key) => key.endsWith("Z")));
for (let k = 0; k < firstNode.length; k++) {
  const node = firstNode[k];
  console.log("new Node started", node);
  let isFound = false;
  let count = 0;
  let index = 0;
  instructions = instructions as string;
  let nextStep = node;
  while (!isFound) {
    if (instructionsList[index] === "L") {
      nextStep = map[nextStep][0];
    } else {
      nextStep = map[nextStep][1];
    }
    if (nextStep.endsWith("Z")) {
      console.log(node, nextStep);
      isFound = true;
      found.push(count + 1);
    }
    count++;
    if (index === instructionsList.length - 1) index = 0;
    else index++;
  }
}
const gcd = (a: number, b: number): number => (b == 0 ? a : gcd(b, a % b));
const lcm = (a: number, b: number) => (a / gcd(a, b)) * b;
const lcmAll = (ns: number[]) => ns.reduce(lcm, 1);
console.log(found);
console.log(">>>>>", lcmAll(found));
console.log(instructions.length);

console.log(found);
console.log(
  "><><",
  found.reduce((a, b) => lcm(a, b), 1)
);

// submitted answers for part 1
// 284
// 2698
// 19099

// submitted answers for part 2

// 66616765 -> too low. meaning it is going to run for a long time
// 122300490 -> too low as well.
// 2.4076766939230767e+25 -> that's not the right answer
// 24076766939230767000000000
// 7_165_704_446_199_633_000_000
// 8_938_163_224_678_760_448
// 8938163224678760448 -> need to try this
// 370517533364224
// 2388568148733200000000
// 17099847107071 -> answer
