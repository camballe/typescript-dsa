function lengthOfLongestSubstring(s: string): number {
  const substringArray: string[] = [];
  let longestSubstringLength = 0;

  // biome-ignore lint/style/useConst: <explanation>
  for (let char of s) {
    const charIndex = substringArray.indexOf(char);

    if (charIndex >= 0) {
      substringArray.splice(0, charIndex + 1);
    }

    substringArray.push(char);
    longestSubstringLength = Math.max(
      longestSubstringLength,
      substringArray.length
    );
  }

  return longestSubstringLength;
}
