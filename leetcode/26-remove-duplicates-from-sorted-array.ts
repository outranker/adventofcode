import runTestCase from "./run-test.ts";

function removeDuplicates(nums: number[]): number {
    let left = 1;
    let right = 1;

    for (right = 1; right < nums.length; right++) {
        if (nums[right] !== nums[right - 1]) {
            nums[left] = nums[right];
            left += 1;
        }
    }
    return left;
}

runTestCase(removeDuplicates, [1, 1, 2], 2);
runTestCase(removeDuplicates, [0, 0, 1, 1, 1, 2, 2, 3, 3, 4], 5);
runTestCase(removeDuplicates, [1, 1], 1);
runTestCase(removeDuplicates, [1, 1, 4, 5, 6, 7, 7], 5);
runTestCase(removeDuplicates, [1, 1, 7, 7, 7, 7, 7], 2);
