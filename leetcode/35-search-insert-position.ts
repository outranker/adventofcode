function searchInsert(nums: number[], target: number): number {
  const l = nums.length;
  let lo = 0;
  let hi = l - 1;
  let mid;
  if (nums[hi] === target) return hi;
  if (nums[lo] === target) return lo;
  if (nums[lo] > target) return 0;
  if (nums[hi] < target) return l;

  while (lo < hi) {
    mid = Math.floor((hi - lo + 1) / 2);
    // console.log("low", lo);
    // console.log("high", hi);
    // console.log("mid", mid);
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] < target) {
      lo = mid + 1;
    }
    if (nums[mid] > target) {
      hi = mid - 1;
    }
  }
  //   console.log(lo, hi, mid);
  if (nums[lo] === target) {
    return lo;
  }
  if (nums[hi] === target) {
    return hi;
  }
  if (nums[lo] > target) {
    return lo;
  }
  return lo + 1;
}

const arr2 = [1, 3, 5, 6];

console.log("answer: ", searchInsert(arr2, 0), "expected 0");
console.log("answer: ", searchInsert(arr2, 1), "expected 0");
console.log("answer: ", searchInsert(arr2, 2), "expected 1");
console.log("answer: ", searchInsert(arr2, 3), "expected 1");
console.log("answer: ", searchInsert(arr2, 4), "expected 2");
console.log("answer: ", searchInsert(arr2, 5), "expected 2");
console.log("answer: ", searchInsert(arr2, 6), "expected 3");
console.log("answer: ", searchInsert(arr2, 7), "expected 4");
console.log("answer: ", searchInsert([1, 3], 2), "expected 1");
console.log("answer: ", searchInsert([1, 2, 3, 4, 5, 10], 2), "expected 1");
