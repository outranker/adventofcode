const t = await Deno.readTextFile("2023/day-4/data.txt");

const array: string[] = t.split("\n");
console.log(array.length);
// let s = 0;
// array.forEach((line, index) => {
//   const [winningNumsListArr, existingNumsListArr] = line.split("|");
//   console.log(winningNumsListArr);
//   const winningNumsList = winningNumsListArr
//     .split(":")[1]
//     .split(" ")
//     .filter((num: string) => !Number.isNaN(parseInt(num, 10)));
//   const existingNumsList = existingNumsListArr
//     .split(" ")
//     .filter((num: string) => !Number.isNaN(parseInt(num, 10)));
//   console.log("winningNumsList", winningNumsList);
//   console.log("existingNumsList", existingNumsList);

//   let count = 0;
//   let sum = 0;
//   existingNumsList.forEach((existingNum, innerIndex) => {
//     if (winningNumsList.includes(existingNum)) {
//       if (count === 0) {
//         count = 1;
//         sum = 1;
//       } else if (count === 1) {
//         sum = sum + count;
//         count = count * 2;
//       } else {
//         sum = sum + count;
//         count = count * 2;
//       }
//     }
//   });
//   s += sum;

//   // console.log(line);
// });
// ************** part 2 ***********

let s = 0;
const obj: Record<string, number> = {};
for (let i = 0; i < array.length; i++) {
  obj[i] = 1;
}
array.forEach((line, index) => {
  const [winningNumsListArr, existingNumsListArr] = line.split("|");
  // console.log(winningNumsListArr);
  const winningNumsList = winningNumsListArr
    .split(":")[1]
    .split(" ")
    .filter((num: string) => !Number.isNaN(parseInt(num, 10)));
  const existingNumsList = existingNumsListArr
    .split(" ")
    .filter((num: string) => !Number.isNaN(parseInt(num, 10)));
  // console.log("winningNumsList", winningNumsList);
  // console.log("existingNumsList", existingNumsList);

  const getMyLoopCount = obj[index];
  for (let j = 0; j < getMyLoopCount; j++) {
    const matchingNumCount = findMatchingNumsCount(
      winningNumsList,
      existingNumsList
    );
    for (let i = index + 1; i < index + 1 + matchingNumCount; i++) {
      obj[i] += 1;
    }
  }

  // console.log(matchingNumCount);
});
console.log(Object.values(obj).reduce((acc, curr) => acc + curr, 0));
console.log("sum: ", s);
function findMatchingNumsCount(winning: string[], existing: string[]) {
  let count = 0;
  winning.forEach((item) => existing.includes(item) && count++);
  return count;
}
function findDuplicates(arr: string[]): string[] {
  return arr.filter((item, index) => arr.indexOf(item) !== index);
}
// submitted answers for part 1

// submitted answers for part 2
// 6874754
