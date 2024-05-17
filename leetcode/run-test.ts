import { bgGreen, bgRed, black } from "https://deno.land/std@0.207.0/fmt/colors.ts";
import { isEqual } from "https://raw.githubusercontent.com/lodash/lodash/4.17.21-es/lodash.js";

// deno-lint-ignore no-explicit-any
const runTestCase = (fn: any, ...rest: any[]) => {
    const expected = rest.pop();
    const res = fn(...rest);
    if (isEqual(res, expected)) {
        console.log(
            bgGreen(black(" PASS! ")),
            "Expected: ",
            expected,
            "Output: ",
            res,
            "Fn Args: ",
            JSON.stringify(rest)
        );
    } else {
        console.log(
            bgRed(black(" FAIL! ")),
            "Expected: ",
            expected,
            "Output: ",
            res,
            "Fn Args: ",
            JSON.stringify(rest)
        );
    }
};

export default runTestCase;
