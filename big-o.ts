//***** SPACE & TIME COMPLEXITY *****//

// constant
// S O(1)
// T O(1)
// Here, a copy of the variable is created.
const toFahrenheit = (degreeCelsius: number): number => {
  return 1.8 * degreeCelsius + 32;
};

// linear
// S O(1) - we are using 'let' so we're reusing memory
// t O(n)
// Here the actual array is referenced directly, so we don't create a copy of the array
// Strings are like arrays. If we create a string of length 5 inside this function, then the space complexity will now be O(6)
const logNums = (nums: number[]) => {
  for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
  }
};

// quadratic
// S 0(1)
// T O(n^2)
const logPairs = (nums: number[]) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      console.log(nums[i], nums[j]);
    }
  }
};
