// function containsDuplicate(nums: number[]): boolean {
//   type Tally = {
//     [num: number]: number;
//   };

//   const tally: Tally = {};

//   for (let num of nums) {
//     if (tally[num]) {
//       return true;
//     }
//     tally[num] = 1;
//   }

//   return false;
// }

function containsDuplicate(nums: number[]): boolean {
  const uniqueNums = new Set<number>(nums);
  return uniqueNums.size < nums.length;
}
