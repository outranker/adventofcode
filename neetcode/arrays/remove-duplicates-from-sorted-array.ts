// array is non-decreasing aka increasing and sorted
// use 2 pointers: l and r

function removeDuplicatesSimple(nums: number[]): number {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
            for (let j = i; j < nums.length - 1; j++) {
                nums[i] = nums[i + 1];
            }
        }
    }

    console.log(JSON.stringify(nums));
    return nums.length;
}

console.log("answer: ", removeDuplicatesSimple([1, 2, 3, 4, 4, 5, 6, 6, 8, 19]), "expected 8");
console.log("answer: ", removeDuplicatesSimple([1, 1, 2]), "expected 2");
console.log("answer: ", removeDuplicatesSimple([1, 2, 3, 4, 5, 6, 8]), "expected 7");
console.log("answer: ", removeDuplicatesSimple([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]), "expected 5");
