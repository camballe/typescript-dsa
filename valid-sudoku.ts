function isValidSudoku(board: string[][]): boolean {
  const rows = board;
  // biome-ignore lint/style/useConst: <explanation>
  for (let row of rows) {
    const filteredRow = row.filter((num: string) => num !== ".");
    if (new Set(filteredRow).size !== filteredRow.length) return false;
  }

  const subBoxes: { [boxIndex: number]: string[] } = {};

  for (let i = 0; i < 9; i++) {
    // biome-ignore lint/style/useConst: <explanation>
    let col: string[] = [];
    for (let j = 0; j < 9; j++) {
      const cell = board[j][i];
      if (cell === ".") continue;
      col.push(cell);

      const boxIndex = 3 * Math.floor(i / 3) + Math.floor(j / 3);

      if (!subBoxes[boxIndex]) {
        subBoxes[boxIndex] = [cell];
      } else {
        if (subBoxes[boxIndex].find((num: string) => num === cell))
          return false;
        subBoxes[boxIndex].push(cell);
      }
    }

    if (new Set(col).size !== col.length) return false;
  }

  return true;
}
