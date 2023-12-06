const t = await Deno.readTextFile("2023/day-5/data.txt");

const array: string[] = t.split("\n");
console.log(array.length);
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
const arr: string[] = [];
seeds.forEach((seed) => {
  const worker = new Worker(new URL("worker.mts", import.meta.url).href, {
    type: "module",
  });
  worker.postMessage({ seed: seed, mappings });

  worker.onmessage = (evt) => arr.push(evt.data);
});
await new Promise((resolve) => setTimeout(resolve, 2000));
console.log("answer", arr.sort((a, b) => a - b)[0]);

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
