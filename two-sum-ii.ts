function twoSum(numbers: number[], target: number): number[] {
  let l = 0;
  let r = numbers.length - 1;

  while (l < r) {
    // biome-ignore lint/style/useConst: <explanation>
    let sum = numbers[l] + numbers[r];

    if (sum === target) return [l + 1, r + 1];
    if (sum < target) l++;
    else r--;
  }

  return [l, r];
}
