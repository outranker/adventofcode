const t = await Deno.readTextFile("2023/day-3/data.txt");

const array: string[] = t.split("\n");
console.log(array.length);
// const symbols = ["%", "#", "*", "/", "@", "$", "&", "=", "+", "-"];
// let s = 0;
// const alreadyCountedNums: {
//   [index: string]: { [innerIndex: string]: number };
// } = {};
// array.forEach((line, index) => {
//   line.split("").forEach((item, innerIndex) => {
//     if (symbols.includes(item)) {
//       console.log("\n\n\n");
//       console.log(array[index - 1]);
//       console.log(line);
//       console.log(array[index + 1]);
//       // check if there is a number to the left of the symbol
//       // if above is true check if it doesn't exist in alreadyCountedNums
//       // then decide to push to the array or add to sum
//       if (line[innerIndex - 1] && isNumber(line[innerIndex - 1])) {
//         const [foundNum, startingIndex] = getNumberToSideWaysAndStartingIndex(
//           line,
//           innerIndex - 1,
//           "left"
//         );
//         console.log(foundNum, item);
//         if (!isAlreadyCounted(foundNum, index, startingIndex)) {
//           s += foundNum;
//           buildTheAlreadyCountedObject(index, startingIndex, foundNum);
//         }
//       }
//       // check if there is a number to the right of the symybol
//       // if above is true check if it doesn't exist in alreadyCountedNums
//       // then decide to push to the array or add to sum
//       if (line[innerIndex + 1] && isNumber(line[innerIndex + 1])) {
//         const [foundNum, startingIndex] = getNumberToSideWaysAndStartingIndex(
//           line,
//           innerIndex + 1,
//           "right"
//         );
//         console.log(foundNum, item);
//         if (!isAlreadyCounted(foundNum, index, startingIndex)) {
//           s += foundNum;

//           buildTheAlreadyCountedObject(index, startingIndex, foundNum);
//         }
//       }

//       // check if string right below is also a number. do the ritual as we did for left and right
//       if (array[index + 1] && isNumber(array[index + 1][innerIndex])) {
//         const [foundNum, startingIndex] = getTheNumberWithoutKnowingDirection(
//           array[index + 1],
//           innerIndex
//         );
//         console.log(foundNum, item);
//         if (!isAlreadyCounted(foundNum, index + 1, startingIndex)) {
//           s += foundNum;
//           buildTheAlreadyCountedObject(index + 1, startingIndex, foundNum);
//         }
//       }
//       // repeat above for string right above. note that if index is 0 or array.length - 1 then
//       // we don't have to do eight this one or the one above
//       if (array[index - 1] && isNumber(array[index - 1][innerIndex])) {
//         const [foundNum, startingIndex] = getTheNumberWithoutKnowingDirection(
//           array[index - 1],
//           innerIndex
//         );
//         console.log(foundNum, item);
//         if (!isAlreadyCounted(foundNum, index - 1, startingIndex)) {
//           s += foundNum;

//           buildTheAlreadyCountedObject(index - 1, startingIndex, foundNum);
//         }
//       }

//       // let's do diagonally now
//       // above left
//       if (array[index - 1] && isNumber(array[index - 1][innerIndex - 1])) {
//         const [foundNum, startingIndex] = getTheNumberWithoutKnowingDirection(
//           array[index - 1],
//           innerIndex - 1
//         );
//         console.log(foundNum, item);
//         if (!isAlreadyCounted(foundNum, index - 1, startingIndex)) {
//           s += foundNum;

//           buildTheAlreadyCountedObject(index - 1, startingIndex, foundNum);
//         }
//       }
//       // above right
//       if (array[index - 1] && isNumber(array[index - 1][innerIndex + 1])) {
//         const [foundNum, startingIndex] = getTheNumberWithoutKnowingDirection(
//           array[index - 1],
//           innerIndex + 1
//         );
//         console.log(foundNum, item);
//         if (!isAlreadyCounted(foundNum, index - 1, startingIndex)) {
//           s += foundNum;

//           buildTheAlreadyCountedObject(index - 1, startingIndex, foundNum);
//         }
//       }
//       // below left
//       if (array[index + 1] && isNumber(array[index + 1][innerIndex - 1])) {
//         const [foundNum, startingIndex] = getTheNumberWithoutKnowingDirection(
//           array[index + 1],
//           innerIndex - 1
//         );
//         console.log(foundNum, item);
//         if (!isAlreadyCounted(foundNum, index + 1, startingIndex)) {
//           s += foundNum;

//           buildTheAlreadyCountedObject(index + 1, startingIndex, foundNum);
//         }
//       }
//       // below right
//       if (array[index + 1] && isNumber(array[index + 1][innerIndex + 1])) {
//         const [foundNum, startingIndex] = getTheNumberWithoutKnowingDirection(
//           array[index + 1],
//           innerIndex + 1
//         );
//         console.log(foundNum, item);
//         if (!isAlreadyCounted(foundNum, index + 1, startingIndex)) {
//           s += foundNum;

//           buildTheAlreadyCountedObject(index + 1, startingIndex, foundNum);
//         }
//       }
//     }
//   });

//   // console.log(line);
// });

// *****  part 2 ******

const symbols = ["*"];
let s = 0;
const alreadyCountedNums: {
  [index: string]: { [innerIndex: string]: number };
} = {};
array.forEach((line, index) => {
  line.split("").forEach((item, innerIndex) => {
    let counter = 0;
    const gearNums = [];
    if (symbols.includes(item)) {
      console.log("\n\n\n");
      console.log(array[index - 1]);
      console.log(line);
      console.log(array[index + 1]);
      // check if there is a number to the left of the symbol
      // if above is true check if it doesn't exist in alreadyCountedNums
      // then decide to push to the array or add to sum
      if (line[innerIndex - 1] && isNumber(line[innerIndex - 1])) {
        const [foundNum, startingIndex] = getNumberToSideWaysAndStartingIndex(
          line,
          innerIndex - 1,
          "left"
        );
        console.log(foundNum, item);
        if (!isAlreadyCounted(foundNum, index, startingIndex)) {
          buildTheAlreadyCountedObject(index, startingIndex, foundNum);
          counter++;
          gearNums.push(foundNum);
        }
      }
      // check if there is a number to the right of the symybol
      // if above is true check if it doesn't exist in alreadyCountedNums
      // then decide to push to the array or add to sum
      if (line[innerIndex + 1] && isNumber(line[innerIndex + 1])) {
        const [foundNum, startingIndex] = getNumberToSideWaysAndStartingIndex(
          line,
          innerIndex + 1,
          "right"
        );
        console.log(foundNum, item);
        if (!isAlreadyCounted(foundNum, index, startingIndex)) {
          buildTheAlreadyCountedObject(index, startingIndex, foundNum);
          counter++;
          gearNums.push(foundNum);
        }
      }

      // check if string right below is also a number. do the ritual as we did for left and right
      if (array[index + 1] && isNumber(array[index + 1][innerIndex])) {
        const [foundNum, startingIndex] = getTheNumberWithoutKnowingDirection(
          array[index + 1],
          innerIndex
        );
        console.log(foundNum, item);
        if (!isAlreadyCounted(foundNum, index + 1, startingIndex)) {
          buildTheAlreadyCountedObject(index + 1, startingIndex, foundNum);
          counter++;
          gearNums.push(foundNum);
        }
      }
      // repeat above for string right above. note that if index is 0 or array.length - 1 then
      // we don't have to do eight this one or the one above
      if (array[index - 1] && isNumber(array[index - 1][innerIndex])) {
        const [foundNum, startingIndex] = getTheNumberWithoutKnowingDirection(
          array[index - 1],
          innerIndex
        );
        console.log(foundNum, item);
        if (!isAlreadyCounted(foundNum, index - 1, startingIndex)) {
          buildTheAlreadyCountedObject(index - 1, startingIndex, foundNum);
          counter++;
          gearNums.push(foundNum);
        }
      }

      // let's do diagonally now
      // above left
      if (array[index - 1] && isNumber(array[index - 1][innerIndex - 1])) {
        const [foundNum, startingIndex] = getTheNumberWithoutKnowingDirection(
          array[index - 1],
          innerIndex - 1
        );
        console.log(foundNum, item);
        if (!isAlreadyCounted(foundNum, index - 1, startingIndex)) {
          buildTheAlreadyCountedObject(index - 1, startingIndex, foundNum);
          counter++;
          gearNums.push(foundNum);
        }
      }
      // above right
      if (array[index - 1] && isNumber(array[index - 1][innerIndex + 1])) {
        const [foundNum, startingIndex] = getTheNumberWithoutKnowingDirection(
          array[index - 1],
          innerIndex + 1
        );
        console.log(foundNum, item);
        if (!isAlreadyCounted(foundNum, index - 1, startingIndex)) {
          buildTheAlreadyCountedObject(index - 1, startingIndex, foundNum);
          counter++;
          gearNums.push(foundNum);
        }
      }
      // below left
      if (array[index + 1] && isNumber(array[index + 1][innerIndex - 1])) {
        const [foundNum, startingIndex] = getTheNumberWithoutKnowingDirection(
          array[index + 1],
          innerIndex - 1
        );
        console.log(foundNum, item);
        if (!isAlreadyCounted(foundNum, index + 1, startingIndex)) {
          buildTheAlreadyCountedObject(index + 1, startingIndex, foundNum);
          counter++;
          gearNums.push(foundNum);
        }
      }
      // below right
      if (array[index + 1] && isNumber(array[index + 1][innerIndex + 1])) {
        const [foundNum, startingIndex] = getTheNumberWithoutKnowingDirection(
          array[index + 1],
          innerIndex + 1
        );
        console.log(foundNum, item);
        if (!isAlreadyCounted(foundNum, index + 1, startingIndex)) {
          buildTheAlreadyCountedObject(index + 1, startingIndex, foundNum);
          counter++;
          gearNums.push(foundNum);
        }
      }
      console.log(counter);
      // here the logic
      if (counter === 2) {
        const tempGearNums = gearNums.filter(
          (item) => !Number.isNaN(Number(item))
        );
        console.log(tempGearNums[0] * tempGearNums[1]);
        s = s + tempGearNums[0] * tempGearNums[1];
        console.log(tempGearNums);
        console.log(s, "?????????");
      }
    }
  });

  // console.log(line);
});
function isNumber(n: string) {
  return !Number.isNaN(Number(n));
}
function getNumberToSideWaysAndStartingIndex(
  s: string,
  index: number,
  direction: "left" | "right"
): [number, number] | never {
  let myNum = "";
  if (direction === "left") {
    for (let i = index; i >= -1; i--) {
      if (isNumber(s[i])) myNum = s[i] + myNum;
      else return [Number(myNum), i + 1];
    }
  } else if (direction === "right") {
    for (let i = index; i <= s.length; i++) {
      if (isNumber(s[i])) myNum += s[i];
      else return [Number(myNum), i - 1];
    }
  }
  throw new Error("yoink");
}
function isAlreadyCounted(n: number, index: number, innerIndex: number) {
  if (n === 278) {
    console.log(
      ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>",
      alreadyCountedNums[index] &&
        alreadyCountedNums[index][innerIndex] &&
        alreadyCountedNums[index][innerIndex] === n
    );
  }

  return (
    alreadyCountedNums[index] &&
    alreadyCountedNums[index][innerIndex] &&
    alreadyCountedNums[index][innerIndex] === n
  );
}

function getTheNumberWithoutKnowingDirection(line: string, innerIndex: number) {
  let myNum = "";
  let startingIndex = innerIndex;
  for (let i = innerIndex; i >= 0; i--) {
    if (isNumber(line[i])) {
      myNum = line[i] + myNum;
      startingIndex = i;
    } else {
      break;
    }
  }
  for (let i = innerIndex + 1; i <= line.length - 1; i++) {
    if (isNumber(line[i])) {
      myNum += line[i];
    } else {
      break;
    }
  }
  // console.log(line, innerIndex, myNum, startingIndex);
  return [Number(myNum), startingIndex];
}

function buildTheAlreadyCountedObject(
  index: number,
  innerIndex: number,
  num: number
) {
  console.log("foundnum", num);
  if (alreadyCountedNums[index]) {
    alreadyCountedNums[index][innerIndex] = num;
  } else {
    alreadyCountedNums[index] = { [innerIndex]: num };
  }
}
// console.log(alreadyCountedNums);
console.log("sum: ", s);

// for (let l of array) {
//   console.log(
//     l
//     // .replaceAll(".", " ")
//     // .split(" ")
//     // .filter((v) => v)
//     // .filter((value, index, self) => self.indexOf(value) !== index)
//   );
// }

// submitted answers for part 1
// 341773
// 889286
// 575525
// 581795
// 535955
// 398314
// 347625
// 540131
