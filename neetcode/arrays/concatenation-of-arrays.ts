import { assert } from "../../util/assert.mts";

function getConcatenation(nums: number[]): number[] {
    const l = nums.length;
    const newArr = new Array(l);
    let i = 0;
    let j = l;
    for (i; i < l; i++) {
        newArr[i] = nums[i];
        newArr[j] = nums[i];
        j += 1;
    }
    return newArr;
}

function getConcatenationLazy(nums: number[]): number[] {
    const l = nums.length;
    const newArr = [];
    for (let k = 0; k < 2; k++) {
        for (let i = 0; i < l; i++) {
            newArr.push(nums[i]);
        }
    }
    return newArr;
}
assert(getConcatenationLazy, [[1, 2, 3, 4]], [1, 2, 3, 4, 1, 2, 3, 4]);
