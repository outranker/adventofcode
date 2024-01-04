const t = await Deno.readTextFile("2023/day-5/data.txt");

const array: string[] = t.split("\n");
console.log(array.length);
// const seeds = array[0].replace("seeds: ", "").split(" ");
// const mappings = array
//   .slice(1)
//   .filter((row) => row.search(":") !== -1)
//   .map((s) => {
//     const t = s.replace(" map:", "").split("-to-");
//     let checker = false;
//     return {
//       source: t[0],
//       destination: t[1],
//       numbers: array.reduce((acc: string[][], curr: string) => {
//         if (checker && curr === "") {
//           checker = false;
//           return [...acc];
//         }
//         if (curr.includes(s)) {
//           checker = true;
//           return [...acc];
//         } else {
//           if (checker) {
//             return [...acc, [...curr.split(" ")]];
//           } else {
//             return [...acc];
//           }
//         }
//       }, [] as string[][]),
//     };
//   });
// const arr: string[] = [];
// seeds.forEach((seed) => {
//   const worker = new Worker(new URL("worker.mts", import.meta.url).href, {
//     type: "module",
//   });
//   worker.postMessage({ seed: seed, mappings });

//   worker.onmessage = (evt) => arr.push(evt.data);
// });
// await new Promise((resolve) => setTimeout(resolve, 2000));
// console.log("answer", arr.sort((a, b) => a - b)[0]);

// ************** part 2 ***********

const seeds = array[0].replace("seeds: ", "").split(" ");
const seedsRange = [];
console.log(seeds);
for (let i = 0; i <= seeds.length / 2; i += 2) {
  seedsRange.push([+seeds[i], +seeds[i] + +seeds[i + 1]]);
}
console.log(Deno.args[0]);
console.log(seedsRange);
const mappings = array
  .slice(1)
  .filter((row) => row.search(":") !== -1)
  .map((s) => {
    const t = s.replace(" map:", "").split("-to-");
    let checker = false;
    return {
      source: t[0],
      destination: t[1],
      numbers: array.reduce((acc: string[][], curr: string) => {
        if (checker && curr === "") {
          checker = false;
          return [...acc];
        }
        if (curr.includes(s)) {
          checker = true;
          return [...acc];
        } else {
          if (checker) {
            return [...acc, [...curr.split(" ")]];
          } else {
            return [...acc];
          }
        }
      }, [] as string[][]),
    };
  });
const argIndex = +Deno.args[0];
console.log("this is arg", argIndex);
const arr: string[] = [];
// seedsRange.forEach((rangeArr: number[]) => {
//   const from = Math.min(+rangeArr[0], +rangeArr[1]);

//   const to = Math.max(+rangeArr[0], +rangeArr[1]);
//   for (let i = from; i < to; i++) {
//     const worker = new Worker(new URL("worker.mts", import.meta.url).href, {
//       type: "module",
//     });
//     worker.postMessage({ seed: i, mappings });

//     worker.onmessage = (evt) => arr.push(evt.data);
//   }
// });
const rangeArr = seedsRange[argIndex];

const from = Math.min(+rangeArr[0], +rangeArr[1]);
const to = Math.max(+rangeArr[0], +rangeArr[1]);
let min;
const len = to - from;
const tenPercent = Math.floor(len / 10);
for (let i = from; i < to; i++) {
  if ((i - from) % tenPercent === 0) {
    console.log(`Loop is ${((i - from) / len) * 100}% complete`);
  }
  const val = someFunction(i, mappings);

  if (min === undefined) {
    min = val;
  } else {
    min = Math.min(min, val);
  }
}
console.log("answer", min);

console.log("i am exiting");
// await new Promise((resolve) => setTimeout(resolve, 2000));
// submitted answers for part 1
// 15248043520461804
// 704949490
// 389056265

// submitted answers for part 2
// 6874754
// 314779387

function someFunction(
  seed: number,
  mappings: {
    source: string;
    destination: string;
    numbers: string[][];
  }[]
): number {
  //   console.log("hello from worker thread", evt.data.mappings);
  let val = +seed;
  for (const mapping of mappings) {
    foreach: for (let i = 0; i < mapping.numbers.length; i++) {
      const element = mapping.numbers[i];

      const range = +element[2];
      const source = +element[1];
      const destination = +element[0];
      if (val >= source && val < source + range) {
        const temp = destination + (val - source);
        if (temp) {
          val = temp;
          break foreach;
        } else {
          break foreach;
        }
      }
    }
  }
  return val;
}
