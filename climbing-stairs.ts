function climbStairs(n: number) {
  let stepsToTopCountOne = 1;
  let stepsToTopCountTwo = 1;

  for (let i = 0; i < n - 1; i++) {
    const temp = stepsToTopCountOne;
    stepsToTopCountOne = stepsToTopCountOne + stepsToTopCountTwo;
    stepsToTopCountTwo = temp;
  }

  return stepsToTopCountOne;
}
