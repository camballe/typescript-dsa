function maxSubArray(nums: number[]): number {
  let localMax = nums[0];
  let globalMax = localMax;

  for (let i = 1; i < nums.length; i++) {
    localMax = Math.max(nums[i], localMax + nums[i]);
    if (localMax > globalMax) {
      globalMax = localMax;
    }
  }

  return globalMax;
}
