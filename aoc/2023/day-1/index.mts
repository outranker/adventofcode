const t = await Deno.readTextFile("2023/day-1/data.txt");

const array: string[] = t.split("\n");
console.log(array.length);
const n = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let s = 0;
// for (const line of array) {
//   let first;
//   for (const l of line) {
//     if (n.includes(Number(l))) {
//       first = Number(l);
//       break;
//     }
//   }
//   let last;
//   for (let i = line.length - 1; i >= 0; i--) {
//     if (n.includes(Number(line[i]))) {
//       last = Number(line[i]);
//       break;
//     }
//   }
//   console.log("first", first);
//   console.log("last", last);
//   s += Number(first + "" + (last + ""));
// }
// console.log(s);

// part 2

const wList = {
  one: { n: 1, w: "one" },
  two: { n: 2, w: "two" },
  three: { n: 3, w: "three" },
  four: { n: 4, w: "four" },
  five: { n: 5, w: "five" },
  six: { n: 6, w: "six" },
  seven: { n: 7, w: "seven" },
  eight: { n: 8, w: "eight" },
  nine: { n: 9, w: "nine" },
};
let s = 0;
for (let line of array) {
  let wListFake = new Array(9).fill(undefined);
  for (const { w, n } of Object.values(wList)) {
    const i = line.indexOf(w);
    if (i !== -1) {
      wListFake[i] = { w: { n, w } };
    }
  }
  wListFake = wListFake.filter((a) => a);
  const l2 = line;
  for (const { w } of wListFake) {
    line = line.replaceAll(w.w, w.w[0] + String(w.n) + (w.w as string).at(-1));
  }
  console.log(line, l2);
  let first;
  for (const l of line) {
    if (n.includes(Number(l))) {
      first = Number(l);
      break;
    }
  }
  let last;
  for (let i = line.length - 1; i >= 0; i--) {
    if (n.includes(Number(line[i]))) {
      last = Number(line[i]);
      break;
    }
  }
  console.log(Number(first + "" + (last + "")));
  s += Number(first + "" + (last + ""));
}
console.log(s);
