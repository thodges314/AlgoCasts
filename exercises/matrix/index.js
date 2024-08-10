// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  const results = Array(n)
    .fill()
    .map(() => Array(n).fill(0));

  let counter = 1;
  let start_col = 0;
  let end_col = n - 1;
  let start_row = 0;
  let end_row = n - 1;
  while (start_col <= end_col && start_row <= end_row) {
    //top row
    for (let i = start_col; i <= end_col; i++) {
      results[start_row][i] = counter++;
    }
    start_row++;

    //right col
    for (let i = start_row; i <= end_row; i++) {
      results[i][end_col] = counter++;
    }
    end_col--;

    //bottom row
    for (let i = end_col; i >= start_col; i--) {
      results[end_row][i] = counter++;
    }
    end_row--;

    //left col
    for (let i = end_row; i >= start_row; i--) {
      results[i][start_col] = counter++;
    }
    start_col++;
  }

  return results;
}

matrix(2);

module.exports = matrix;
