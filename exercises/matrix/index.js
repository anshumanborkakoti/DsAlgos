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
  let results = [];
  for (let index = 0; index < n; index++) {
    results.push([]);
  }
  let num = 1;
  let startRow = 0;
  let startColumn = 0;
  let endRow = n - 1;
  let endColumn = n - 1;
  while (startRow <= endRow && startColumn <= endColumn) {
    //First row
    for (let index = startRow; index <= endColumn; index++) {
      results[startRow][index] = num++;
    }
    startRow++;
    //Last element down
    for (let row = startRow; row <= endRow; row++) {
      results[row][endColumn] = num++;
    }
    endColumn--;

    //Last element
    for (
      let columnIndex = endColumn;
      columnIndex >= startColumn;
      columnIndex--
    ) {
      results[endRow][columnIndex] = num++;
    }
    endRow--;

    //First element
    for (let row = endRow; row >= startRow; row--) {
      results[row][startColumn] = num++;
    }
    startColumn++;
  }
  console.log(results);
  return results;
}
matrix(10);
module.exports = matrix;
