// function twoSum(nums: number[], target: number): number[] {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length; j++) {
//       if (i === j) continue;
//       if (nums[i] + nums[j] === target) return [i, j];
//     }
//   }
//   return [];
// }

function twoSum(nums: number[], target: number): number[] {
  const complements = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    if (complements.has(complement)) return [complements.get(complement)!, i];

    complements.set(nums[i], i);
  }

  return [];
}
