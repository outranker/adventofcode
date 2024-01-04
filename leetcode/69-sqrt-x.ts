import runTestCase from "./run-test.ts";
function mySqrt(x: number): number {
  let result = 0;

  let lo = 0;
  let hi = x;
  while (hi >= lo) {
    const mid = lo + Math.floor((hi - lo) / 2);
    const square = mid * mid;
    if (square === x) {
      return mid;
    } else if (square < x && square > result) {
      result = mid;
    }
    if (square > x) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }

  return result;
}

runTestCase(mySqrt, 0, 0);
runTestCase(mySqrt, 1, 1);
runTestCase(mySqrt, 2, 1);
runTestCase(mySqrt, 9, 3);
runTestCase(mySqrt, 3, 1);
runTestCase(mySqrt, 4, 2);
runTestCase(mySqrt, 7, 2);
runTestCase(mySqrt, 8, 2);
runTestCase(mySqrt, 27, 5);
