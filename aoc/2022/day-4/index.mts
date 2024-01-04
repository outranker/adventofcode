// const t = await Deno.readTextFile("./data.txt");

// const arr = t.split("\n").map((item) => item.split(","));

// console.log(arr);
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//   const firstPair = arr[i][0];
//   const secondPair = arr[i][1];
//   let [fStart, fEnd] = firstPair.split("-");
//   let [sStart, sEnd] = secondPair.split("-");

//   fStart = Number(fStart);
//   fEnd = Number(fEnd);
//   sStart = Number(sStart);
//   sEnd = Number(sEnd);

//   if (
//     (fStart <= sStart && fEnd >= sEnd) ||
//     (sStart <= fStart && sEnd >= fEnd)
//   ) {
//     console.log(
//       "[fStart, fEnd]",
//       fStart,
//       fEnd,
//       fStart >= sStart && fEnd >= sEnd
//     );
//     console.log(
//       "[sStart, sEnd]",
//       sStart,
//       sEnd,
//       sStart >= fStart && sEnd >= fEnd
//     );
//     count++;
//   }
// }
// console.log("count:", count);
// TODO: 22-77,14-96
// TODO: 7-99,65-98
// TODO: 22-36,37-62
// TODO: 25-94,24-67
// TODO: 6-91,1-6
// TODO: 88-88,2-88
// TODO: 27-89,58-96

/** already answered
 * 676
 * 719
 * 532
 *
 *
 *
 *
 */

// above is part 1
// below is part 2

const t = await Deno.readTextFile("./data.txt");

const arr = t.split("\n").map((item) => item.split(","));

console.log(arr);
let count = 0;
for (let i = 0; i < arr.length; i++) {
  const firstPair = arr[i][0];
  const secondPair = arr[i][1];
  let [fStart, fEnd] = firstPair.split("-");
  let [sStart, sEnd] = secondPair.split("-");

  fStart = Number(fStart);
  fEnd = Number(fEnd);
  sStart = Number(sStart);
  sEnd = Number(sEnd);

  const firstPairCount = Math.abs(fStart - fEnd) + 1;
  const secondPairCount = Math.abs(sStart - sEnd) + 1;
  const needsNotToBeInSet = firstPairCount + secondPairCount;
  const s = new Set();
  for (let j = fStart; j <= fEnd; j++) {
    s.add(j);
  }
  for (let k = sStart; k <= sEnd; k++) {
    s.add(k);
  }
  console.log(s.size, needsNotToBeInSet);
  if (s.size < needsNotToBeInSet) {
    console.log(s.size, needsNotToBeInSet);
    count++;
  }
}
console.log("count:", count);
// TODO: 22-77,14-96
// TODO: 7-99,65-98
// TODO: 22-36,37-62
// TODO: 25-94,24-67
// TODO: 6-91,1-6
// TODO: 88-88,2-88
// TODO: 27-89,58-96

/** already answered
 * 676
 * 719
 * 532
 *
 *
 *
 *
 */
