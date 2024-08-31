function isValid(s: string): boolean {
  if (s.length < 2) return false;

  // biome-ignore lint/style/useConst: <explanation>
  let openingBrackets = ["(", "[", "{"];

  if (openingBrackets.includes(s[s.length - 1])) return false;

  // biome-ignore lint/style/useConst: <explanation>
  let stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    if (openingBrackets.includes(s[i])) {
      stack.push(s[i]);
    }

    const topChar = stack[stack.length - 1];

    if (
      (s[i] === ")" && topChar === "(") ||
      (s[i] === "]" && topChar === "[") ||
      (s[i] === "}" && topChar === "{")
    ) {
      stack.pop();
    } else {
      return false;
    }
  }

  return !stack.length;
}
