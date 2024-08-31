function subsets(nums: number[]): number[][] {
  const subsets: number[][] = [];
  const currentSubset: number[] = [];

  const backtrack = (i: number) => {
    if (i === nums.length) {
      subsets.push([...currentSubset]);
      return;
    }
    currentSubset.push(nums[i]);
    backtrack(i + 1);
    currentSubset.pop();
    backtrack(i + 1);
  };

  backtrack(0);

  return subsets;
}
