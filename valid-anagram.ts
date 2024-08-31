// function isAnagram(s: string, t: string): boolean {
//   let remainingLettersS = s.split("");

//   for (let letter of t) {
//     const sIndex = remainingLettersS.findIndex((l) => l === letter);

//     if (sIndex < 0) {
//       return false;
//     }

//     remainingLettersS.splice(sIndex, 1);
//   }

//   return remainingLettersS.length === 0;
// }

// function isAnagram(s: string, t: string): boolean {
//   return s.split("").sort().join() === t.split("").sort().join();
// }

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  if (s.length === 0 || t.length === 0) return false;

  const sCharCountMap = new Map<string, number>();

  // biome-ignore lint/style/useConst: <explanation>
  for (let char of s) {
    const charCount = sCharCountMap.get(char);
    const newCharCount = charCount ? charCount + 1 : 1;

    sCharCountMap.set(char, newCharCount);
  }

  // biome-ignore lint/style/useConst: <explanation>
  for (let char of t) {
    const frequencyOfChar = sCharCountMap.get(char);
    if (!frequencyOfChar) return false;
    if (frequencyOfChar === 1) {
      sCharCountMap.delete(char);
    } else {
      sCharCountMap.set(char, frequencyOfChar - 1);
    }
  }

  return sCharCountMap.size === 0;
}
