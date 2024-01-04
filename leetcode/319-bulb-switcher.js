/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function (n) {
  let list = Array(n).fill("off");

  let lastRound = list.length;
  let rounds = 0;
  //   console.log("this is rounds", rounds);
  while (rounds !== lastRound) {
    // console.log("starting", rounds, "total rounds", lastRound);
    const flag = rounds + 1;

    // console.log("ROUND ---- " + flag);
    if (lastRound === 1) {
      list[0] = "on";
      break;
    }
    if (flag === lastRound) {
      list[lastRound - 1] = list[lastRound - 1] === "on" ? "off" : "on";
    } else {
      // console.log("..>>>>>>>", flag);
      for (let i = flag - 1; i < lastRound; i = i + flag) {
        // console.log("before", i, list[i]);
        list[i] = list[i] === "on" ? "off" : "on";
        // console.log("after", i, list[i], "\n");
      }
    }

    rounds++;
    // console.log(list);
  }
  return countOnBulbs(list);
};
function countOnBulbs(arr) {
  return arr.filter((item) => item === "on").length;
}

// console.log(Number(process.argv[2]));
const n = process.argv[2];
// console.log("result is: ", bulbSwitch((n && Number(process.argv[2])) || 10));
