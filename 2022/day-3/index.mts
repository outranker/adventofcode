// import sortedList from "./priority-letters.mjs";
// const t = await Deno.readTextFile("./data.txt");
// console.log(sortedList);
// const arr: string[] = t.split("\n");
// console.log(arr.length);
// const dupes: string[] = [];
// let total = 0;
// for (let i = 0; i < arr.length; i++) {
//   const temp: string[] = [];
//   const firstSlice = arr[i].slice(0, arr[i].length / 2);
//   const secondSlice = arr[i].slice(arr[i].length / 2, arr[i].length);
//   console.log("firstSlice", firstSlice);
//   console.log("secondSlice", secondSlice);
//   firstSlice.split("").forEach((element: string) => {
//     temp.push(element);
//   });
//   for (let k = 0; k < secondSlice.split("").length; k++) {
//     const element = secondSlice.split("")[k];
//     if (temp.includes(element)) {
//       console.log("element", element);
//       dupes.push(element);
//       break;
//     }
//   }
//   // secondSlice.split("").forEach((element: string) => {
//   // });
//   console.log("dupe", dupes);
// }
// const dupesSet = new Set(dupes);
// dupes.forEach((item: string) => {
//   total += sortedList[item];
// });

// console.log("total", total);

/** already answered
 * 10098
 * 948
 * 7476
 * 8063
 * 8233
 */

// TODO: GGVGlqWFgVfFqqVZGFlblJPMsDbbMrDMpDsJRn
// TODO: LwzHtwdLHHwDrzPZzzsJbJ
// TODO: wdLTBvSvHvZVGCjhfN
// TODO: HsSSnZVHjjssZnJpSJjBHHWgQGcgqqQLQdQFqNgWgqGNDg
// TODO: rmmRwrtfThtTrbCrGGGcLBDTqDBNQLdL
// TODO: mwPrrbzPfwvbzhwMMnnjHnBjZlnzMM

// above is part 1
// below is part 2

import sortedList from "./priority-letters.mjs";
const t = await Deno.readTextFile("./data.txt");
console.log(sortedList);
const arr: string[] = t.split("\n");
console.log(arr.length);

const dupes: string[] = [];
let total = 0;
for (let i = 0; i < arr.length; i = i + 3) {
  console.log("start", i);
  console.log(i + 1);
  console.log(i + 2);
  const temp: Record<string, number> = {};
  const firstSlice = new Set(arr[i].split("")); // arr[i].split(""); //new Set(arr[i].split(""));
  const secondSlice = new Set(arr[i + 1].split("")); //arr[i + 1].split(""); // new Set(arr[i + 1].split(""));
  const thirdSlice = new Set(arr[i + 2].split("")); //arr[i + 2].split(""); //new Set(arr[i + 2].split(""));
  console.log("index is ", i, firstSlice);
  console.log("index is ", i + 1, secondSlice);
  console.log("index is ", i + 2, thirdSlice);
  firstSlice.forEach((item) => {
    if (temp[item]) {
      temp[item] = temp[item] + 1;
    } else {
      temp[item] = 1;
    }
  });
  secondSlice.forEach((item) => {
    if (temp[item]) {
      temp[item] = temp[item] + 1;
    } else {
      temp[item] = 1;
    }
  });
  thirdSlice.forEach((item) => {
    if (temp[item]) {
      temp[item] = temp[item] + 1;
    } else {
      temp[item] = 1;
    }
  });
  console.log(temp);
  // let max = {};
  for (const t in temp) {
    //   if (Object.keys(max).length) {
    //     if (max[Object.keys(max)[0]] < temp[t]) {
    //       max[t] = temp[t];
    //     }
    //   } else {
    //     max[t] = temp[t];
    //   }
    if (temp[t] === 3) {
      dupes.push(t);
    }
  }
  // dupes.push(Object.keys(max)[0]);
  // console.log(dupes);
}
// const dupesSet = new Set(dupes);
dupes.forEach((item: string) => {
  total += sortedList[item];
});
// const d2 = [...dupes];
// d2.sort((a, b) => b.charCodeAt(0) - a.charCodeAt(0));
console.log(dupes.length);
console.log(dupes);

console.log("total", total);

/** already answered
 * 9792
 * 3909
 * 24959
 * 5603
 * 2821
 */

// TODO: GGVGlqWFgVfFqqVZGFlblJPMsDbbMrDMpDsJRn
// TODO: LwzHtwdLHHwDrzPZzzsJbJ
// TODO: wdLTBvSvHvZVGCjhfN
// TODO: HsSSnZVHjjssZnJpSJjBHHWgQGcgqqQLQdQFqNgWgqGNDg
// TODO: rmmRwrtfThtTrbCrGGGcLBDTqDBNQLdL
// TODO: mwPrrbzPfwvbzhwMMnnjHnBjZlnzMM
