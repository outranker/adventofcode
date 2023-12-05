const t = await Deno.readTextFile("2023/day-5/data.txt");

const array: string[] = t.split("\n");
console.log(array.length);
let s = 0;
const seeds = array[0].replace("seeds: ", "").split(" ");
const seeds2 = [];
for (let index = 0; index < 5; index + 2) {
  for (let j = +seeds[index]; j < +seeds[index + 1]; j++) {
    seeds2.push(j);
  }
}
const mappings = array
  .slice(1)
  .filter((row) => row.search(":") !== -1)
  .map((s) => {
    const t = s.replace(" map:", "").split("-to-");
    let checker = false;
    return {
      source: t[0],
      destination: t[1],
      numbers: array.reduce((acc: string[], curr: string) => {
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
      }, [] as string[]),
    };
  });
const obj: any = {};
// mappings.forEach((map) => {
//   (map.numbers as unknown as number[][]).forEach((element) => {
//     const range = element[2];
//     // console.log(range);
//     for (let i = 0; i < range; i++) {
//       const key = +element[1] + i;
//       const value = +element[0] + i;
//       obj[map.source + map.destination] = {
//         ...obj[map.source + map.destination],
//         [key]: value,
//       };
//     }
//   });
// });
const arr: string[] = [];
seeds2.forEach((seed, index) => {
  const worker = new Worker(new URL("worker.mts", import.meta.url).href, {
    type: "module",
  });
  worker.postMessage({ seed: seed, mappings });

  worker.onmessage = (evt) => arr.push(evt.data);
  // console.log("im pushing", val);
});
await new Promise((resolve) => setTimeout(resolve, 2000));
console.log(arr.sort((a, b) => a - b)[0]);

// console.log(arr.sort((a, b) => a - b));
// console.log(obj);
// seeds.forEach((seed, index) => {
//   mappings.forEach((map) => {
//     for (let i = 0; i < map.numbers.length; i++) {
//       const range = map.numbers[i][2];
//     }
//   });
//   // console.log(line);
// });
// ************** part 2 ***********

function findDuplicates(arr: string[]): string[] {
  return arr.filter((item, index) => arr.indexOf(item) !== index);
}
// submitted answers for part 1
// 15248043520461804
// 704949490
// 389056265

// submitted answers for part 2
// 6874754
