const t = await Deno.readTextFile("2023/day-6/data.txt");

const array: string[] = t.split("\n");
const time = array[0]
  .replace("Time:", "")
  .split(" ")
  .filter((s) => s);
const distance = array[1]
  .replace("Distance:", "")
  .split(" ")
  .filter((s) => s);

console.log(array.length);
console.log(time);
console.log(distance);

let ss = 1;
let winners: number[] = [];
for (let i = 0; i < time.length; i++) {
  const gameLastsForMs = +time[i];
  for (let j = 1; j <= gameLastsForMs; j++) {
    const waitMs = j;
    const howMuchLeftAfterWaitMs = gameLastsForMs - waitMs;
    const travellableDistance = howMuchLeftAfterWaitMs * waitMs;
    // console.log({ travellableDistance });
    if (travellableDistance > +distance[i]) {
      winners.push(waitMs);
      // console.log(winners.length);
    }
  }

  ss = ss * winners.length;
  winners = [];
  // break;
}
console.log(ss);
// console.log(winners);
// console.log(arr);

// ************** part 2 ***********

// submitted answers for part 1
// 1008
// 588588

// submitted answers for part 2
//
