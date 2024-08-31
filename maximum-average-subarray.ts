function findMaxAverage(nums: number[], k: number): number {
  let maxSum = 0;

  for (let i = 0; i < k; i++) {
    maxSum += nums[i];
  }

  let prevSum = maxSum;

  for (let i = 1; i < nums.length - k + 1; i++) {
    const sum = prevSum - nums[i - 1] + nums[i + k - 1];
    prevSum = sum;

    if (sum > maxSum) {
      maxSum = sum;
    }
  }

  return maxSum / k;
}
