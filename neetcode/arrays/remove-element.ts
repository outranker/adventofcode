import { assert } from "../../util/assert.mts";

function removeElement(nums: number[], val: number): number {
    if (nums.length === 0) return 0;
    if (nums.length === 1 && nums[0] === val) return 0;
    if (nums.length === 1 && nums[0] !== val) return 1;

    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            if (k !== i) nums[k] = nums[i];
            k += 1;
        }
    }

    return k;
}

function _oldRemoveElement(nums: number[], val: number): number {
    let p = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            for (let j = nums.length - 1; j > i; j--) {
                if (nums[j] !== val) {
                    const temp = nums[j];
                    nums[j] = nums[i];
                    nums[i] = temp;
                    p += 1;
                    break;
                }
            }
        } else {
            p += 1;
        }
    }
    return p;
}

assert(removeElement, [[1, 2, 3, 4], 4], 3);
assert(removeElement, [[], 3], 0);
assert(removeElement, [[4, 4, 4, 4], 4], 0);
assert(removeElement, [[1, 2, 3, 4], 4], 3);
