// function countBits(n: number): number[] {
//   const ans = new Array<number>(n + 1).fill(0);

//   let significantPowerOfTwo = 1; // 2^0

//   for (let i = 1; i <= n; i++) {
//     if (2 * significantPowerOfTwo === i) {
//       significantPowerOfTwo = i;
//     }
//     ans[i] = 1 + ans[i - significantPowerOfTwo];
//   }

//   return ans;
// }

function countBits(n: number): number[] {
  const ans = new Uint8Array(n + 1);

  for (let i = 0; i <= ans.length; i++) {
    ans[i] = ans[i >> 1] + (i & 1);
  }

  return [...ans];
}
