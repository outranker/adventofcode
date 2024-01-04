import {
  bgGreen,
  bgRed,
  black,
} from "https://deno.land/std@0.207.0/fmt/colors.ts";
import { isEqual } from "https://raw.githubusercontent.com/lodash/lodash/4.17.21-es/lodash.js";

const runTestCase = <T, K>(fn: (args: K) => K, fnArgs: K, expected: T) => {
  const res = fn(fnArgs);
  if (isEqual(res, expected)) {
    console.log(
      bgGreen(black(" PASS! ")),
      "Expected: ",
      expected,
      "Output: ",
      res,
      "Fn Args: ",
      fnArgs
    );
  } else {
    console.log(
      bgRed(black(" FAIL! ")),
      "Expected: ",
      expected,
      "Output: ",
      res,
      "Fn Args: ",
      fnArgs
    );
  }
};

export default runTestCase;
