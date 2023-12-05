const t = await Deno.readTextFile("2023/day-5/data-test.txt");

const array: string[] = t.split("\n");
console.log(array.length);
let s = 0;
const seeds = array[0].replace("seeds: ", "").split(" ");
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
        console.log(acc);
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
console.log(mappings);
const obj = {};
console.log(seeds);
seeds.forEach((seed, index) => {
  mappings.forEach((map) => {
    for (let i = 0; i < map.numbers.length; i++) {
      const range = map.numbers[i][2];
    }
  });
  // console.log(line);
});
// ************** part 2 ***********

function findDuplicates(arr: string[]): string[] {
  return arr.filter((item, index) => arr.indexOf(item) !== index);
}
// submitted answers for part 1

// submitted answers for part 2
// 6874754
