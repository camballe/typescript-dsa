function rotate(matrix: number[][]): void {
  const n = matrix.length;

  // 1 2 3  // 1 4 7  // 7 4 1
  // 4 5 6  // 2 5 8  // 8 5 2
  // 7 8 9  // 3 6 9  // 9 6 3

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }
}
