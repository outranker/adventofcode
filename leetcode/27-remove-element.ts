import runTestCase from "./run-test.ts";

function removeElement(nums: number[], val: number): number {
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

runTestCase(removeElement, [3, 2, 2, 3], 3, 2);
runTestCase(removeElement, [0, 1, 2, 2, 3, 0, 4, 2], 2, 5);
runTestCase(removeElement, [1, 1, 1, 1, 1], 1, 0);
runTestCase(removeElement, [1, 1, 4, 5, 6, 7, 7], 10, 7);
runTestCase(removeElement, [], 2, 0);
runTestCase(removeElement, [1, 2], 3, 2);
