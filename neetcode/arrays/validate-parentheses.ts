import { assert } from "../../util/assert.mts";

function isValid(s: string): boolean {
    const stack = [];
    const l = s.length;

    for (let i = 0; i < l; i++) {
        if (s[i] === "}" || s[i] === "]" || s[i] === ")") {
            if (s[i] === "}") {
                if (stack.at(-1) !== "{") {
                    return false;
                } else {
                    stack.pop();
                }
            } else if (s[i] === ")") {
                if (stack.at(-1) !== "(") {
                    return false;
                } else {
                    stack.pop();
                }
            }
            if (s[i] === "]") {
                if (stack.at(-1) !== "[") {
                    return false;
                } else {
                    stack.pop();
                }
            }
        } else {
            stack.push(s[i]);
        }
    }

    if (stack.length !== 0) return false;
    return true;
}

assert(isValid, ["{[()]}"], true);
assert(isValid, ["[(])"], false);
assert(isValid, ["[]"], true);
