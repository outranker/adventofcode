// const t = await Deno.readTextFile("./data.txt");

// const a = t.split("\n") as string[];
// const height = a.length;
// const width = a[0].length;
// const totalEdgeTrees = height * 2 + width * 2 - 4;
// let total = 0;
// const array: number[][] = a.map((line) => line.split("")) as any as number[][];
// // const uppermostEdge = 0
// // const downEdge = length - 1
// // const leftEdge = [i][0]
// // const rightEdge = [i][i.length - 1]
// for (let i = 0; i < array.length; i++) {
//   for (let j = 0; j < array[i].length; j++) {
//     array[i][j] = Number(array[i][j]);
//   }
// }
// for (let i = 0; i < array.length; i++) {
//   if (i === 0 || i === array.length - 1) continue;
//   for (let j = 0; j < array[i].length; j++) {
//     if (j === 0 || j === array.length - 1) continue;
//     /**
//      * let's say it 0 which is array[1][1]
//      * go left:
//      * while (j !== 0) { compare and increase total} do { j -= 1 -> decrement}
//      * go right:
//      * while (j !== a[i][j].length - 1) { compare and increase total} do { j += 1 -> increment}
//      * go up:
//      * while (i !== 0) { compare and increase total} do { i -= 1 -> decrement}
//      * go down:
//      * while (i !== a[i].length - 1) { compare and increase total} do { j += 1 -> increment}
//      */
//     let left = true;
//     let right = true;
//     let up = true;
//     let down = true;
//     const currentNumber = array[i][j];
//     // go left
//     for (let l = j - 1; l >= 0; l--) {
//       const element = array[i][l];
//       if (currentNumber <= element) {
//         left = false;
//       }
//     }

//     // go right
//     for (let r = j + 1; r <= array[i].length - 1; r++) {
//       const element = array[i][r];
//       if (currentNumber <= element) {
//         right = false;
//       }
//     }

//     // go up
//     for (let u = i - 1; u >= 0; u--) {
//       const element = array[u][j];
//       if (currentNumber <= element) {
//         up = false;
//       }
//     }
//     // go down
//     for (let d = i + 1; d <= array.length - 1; d++) {
//       const element = array[d][j];
//       if (currentNumber <= element) {
//         down = false;
//       }
//     }
//     if (left || right || up || down) total++;
//   }
// }

// console.log("totalEdgeTrees", totalEdgeTrees);
// console.log("total", total);
// console.log("total both", total + totalEdgeTrees);

// // console.log("after:", stacks);
// /** already answered
//  * 800181
//  * 809982
//  * 75747
//  * 10319
//  * 9801
//  * 10925 -> not
//  * 392
//  * 1776
//  */

// /**
//  * move 1 from 2 to 1
//  * move 3 from 1 to 3
//  * move 2 from 2 to 1
//  * move 1 from 1 to 2
//  */

// below is part 2

const t = await Deno.readTextFile("./data.txt");

const a = t.split("\n") as string[];
const height = a.length;
const width = a[0].length;
const totalEdgeTrees = height * 2 + width * 2 - 4;
let total = 0;
const array: number[][] = a.map((line) => line.split("")) as any as number[][];
// const uppermostEdge = 0
// const downEdge = length - 1
// const leftEdge = [i][0]
// const rightEdge = [i][i.length - 1]
let max = 0;
const temp: number[] = [];
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array[i].length; j++) {
    array[i][j] = Number(array[i][j]);
  }
}
for (let i = 0; i < array.length; i++) {
  if (i === 0 || i === array.length - 1) continue;
  for (let j = 0; j < array[i].length; j++) {
    if (j === 0 || j === array.length - 1) continue;

    let leftM = 0;
    let rightM = 0;
    let upM = 0;
    let downM = 0;
    let left = true;
    let right = true;
    let up = true;
    let down = true;
    const currentNumber = array[i][j];
    // go left
    for (let l = j - 1; l >= 0; l--) {
      leftM++;
      const element = array[i][l];
      if (currentNumber <= element) {
        left = false;
        break;
      }
    }

    // go right
    for (let r = j + 1; r <= array[i].length - 1; r++) {
      rightM++;
      const element = array[i][r];
      if (currentNumber <= element) {
        right = false;
        break;
      }
    }

    // go up
    for (let u = i - 1; u >= 0; u--) {
      upM++;
      const element = array[u][j];
      if (currentNumber <= element) {
        up = false;
        break;
      }
    }
    // go down
    for (let d = i + 1; d <= array.length - 1; d++) {
      downM++;
      const element = array[d][j];
      if (currentNumber <= element) {
        down = false;
        break;
      }
    }
    if (max <= leftM * rightM * upM * downM) max = leftM * rightM * upM * downM;
    if (left || right || up || down) total++;
  }
}

console.log("max", max);
console.log("totalEdgeTrees", totalEdgeTrees);
console.log("total", total);
console.log("total both", total + totalEdgeTrees);

// console.log("after:", stacks);
/** already answered
 * 234416
 */

/**
 * move 1 from 2 to 1
 * move 3 from 1 to 3
 * move 2 from 2 to 1
 * move 1 from 1 to 2
 */
