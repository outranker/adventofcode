// const t = await Deno.readTextFile("./data.txt");
// type Them = "A" | "B" | "C";
// type Me = "X" | "Y" | "Z";
// const arr: string[] = t.split("\n");
// console.log(arr.length);
// const points = {
//   A: 1,
//   B: 2,
//   C: 3,
//   X: 1,
//   Y: 2,
//   Z: 3,
// };
// let total = 0;
// const A = 1; //  "Rock"; // 1p
// const B = 2; // "Paper"; // 2p
// const C = 3; // "Scissors"; // 3p
// const X = 1; // "Rock"; // 1
// const Y = 2; // "Paper"; // 2
// const Z = 3; // "Scissors"; // 3
// for (let i = 0; i < arr.length; i++) {
//   const them = arr[i][0] as Them;
//   const me = arr[i][2] as Me;
//   console.log(them, me);
//   if (
//     (them === "A" && me === "X") ||
//     (them === "B" && me === "Y") ||
//     (them === "C" && me === "Z")
//   ) {
//     total = total + points[me] + 3;
//   } else if (
//     (them === "C" && me === "X") ||
//     (them === "B" && me === "Z") ||
//     (them === "A" && me === "Y")
//   ) {
//     total = total + points[me] + 6;
//   } else {
//     total = total + points[me];
//   }
// }
// console.log(total);

// /** already answered
//  * 11873
//  */

// below is part 2
/**
 * Rock defeats Scissors ->   A Z   X C
 * Paper defeats Rock ->      B X   Y A
 * Scissors defeats Paper ->  C Y   Z B
 */
const t = await Deno.readTextFile("./data.txt");
type Them = "A" | "B" | "C";
type Me = "X" | "Y" | "Z";
const arr: string[] = t.split("\n");
console.log(arr.length);
const points = {
  A: 1,
  B: 2,
  C: 3,
  X: 1,
  Y: 2,
  Z: 3,
};
const theyWin = {
  A: "Z",
  B: "X",
  C: "Y",
};
const iWin2 = {
  C: "A",
  A: "B",
  B: "C",
};
const iWin = {
  X: "C",
  Y: "A",
  Z: "B",
};
let total = 0;
const A = 1; //  "Rock"; // 1p
const B = 2; // "Paper"; // 2p
const C = 3; // "Scissors"; // 3p
const X = 1; // "Rock"; // 1
const Y = 2; // "Paper"; // 2
const Z = 3; // "Scissors"; // 3
for (let i = 0; i < arr.length; i++) {
  const them = arr[i][0] as Them;
  const me = arr[i][2] as Me;
  console.log(them, me);
  if (me === "X") {
    // lose
    total += points[theyWin[them] as Them | Me];
  } else if (me === "Y") {
    // draw
    total = total + points[them] + 3;
  } else {
    // win
    total = total + points[iWin2[them] as Them | Me] + 6;
  }
}
console.log(total);

/** already answered
 * 4797
 * 8798
 * 8992
 * 12014
 */
