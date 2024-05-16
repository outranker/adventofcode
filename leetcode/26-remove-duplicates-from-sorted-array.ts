import runTestCase from "./run-test.ts";

function removeDuplicates(nums: number[]): number {
    if (nums.length === 0) {
        return 0;
    }
    let curr = 0;
    const newArr: number[] = [];
    while (curr !== nums.length) {
        if (curr === nums.length - 1) {
            newArr.push(nums[curr]);
        }
        if (nums[curr] < nums[curr + 1]) {
            newArr.push(nums[curr]);
            curr++;
        } else {
            curr++;
        }
    }
    return newArr.length;
}

runTestCase(removeDuplicates, [1, 1, 2], 2);
runTestCase(removeDuplicates, [0, 0, 1, 1, 1, 2, 2, 3, 3, 4], 5);
runTestCase(removeDuplicates, [1, 1], 1);
runTestCase(removeDuplicates, [1, 1, 4, 5, 6, 7, 7], 5);
