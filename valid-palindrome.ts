function isPalindrome(s: string): boolean {
  if (s.length === 0 || s.length === 1) return true;

  // biome-ignore lint/style/useConst: <explanation>
  let cleanedS = s.replace(/[^a-z0-9]/gi, "").toLowerCase();

  let l = 0;
  let r = cleanedS.length - 1;

  while (l <= r) {
    if (cleanedS[l] !== cleanedS[r]) return false;
    l++;
    r--;
  }

  return true;
}
