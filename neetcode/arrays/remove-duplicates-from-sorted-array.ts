// array is non-decreasing aka increasing and sorted
// use 2 pointers: l and r
import { assert } from "../../util/assert.mts";

function removeDuplicatesSimple(nums: number[]): number {
    let l = 0;
    let r = 1;

    for (r; r < nums.length; r++) {
        // console.log("before loop  ", l, r);
        if (nums[r] !== nums[l]) {
            l++;
            if (nums[l] !== nums[r]) nums[l] = nums[r];
        }
        // console.log("after loop   ", l, r);
    }
    return l + 1;
}

assert(removeDuplicatesSimple, [[0, 0, 1, 2, 2, 4]], 4);
assert(removeDuplicatesSimple, [[1, 2, 3, 4, 4, 5, 6, 6, 8, 19]], 8);
assert(removeDuplicatesSimple, [[1, 1, 2]], 2);
assert(removeDuplicatesSimple, [[1, 2, 3, 4, 5, 6, 8]], 7);
assert(removeDuplicatesSimple, [[0, 0, 1, 1, 1, 2, 2, 3, 3, 4]], 5);
