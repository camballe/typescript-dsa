function numIslands(grid: string[][]): number {
  if (grid.length === 0) return 0;
  let numberOfIslands = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1") {
        numberOfIslands++;
        traverseLand(grid, i, j);
      }
    }
  }

  return numberOfIslands;
}

function traverseLand(grid: string[][], i: number, j: number) {
  if (grid[i][j] !== "1") return;
  grid[i][j] = "2";

  const adjacentPositions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  // biome-ignore lint/style/useConst: <explanation>
  for (let [apx, apy] of adjacentPositions) {
    const [x, y] = [i + apx, j + apy];
    const isValidX = x >= 0 && x < grid.length;
    const isValidY = y >= 0 && x < grid.length;

    if (isValidX && isValidY && grid[x][y] === "1") {
      traverseLand(grid, x, y);
    }
  }
}
