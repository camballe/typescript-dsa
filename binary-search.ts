function search(nums: number[], target: number): number {
  let l = 0;
  let r = nums.length - 1;
  let m: number;

  while (l <= r) {
    m = Math.floor((l + r) / 2);
    if (nums[m] === target) {
      return m;
    }
    if (nums[m] < target) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }

  return -1;
}
