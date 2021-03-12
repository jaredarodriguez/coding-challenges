/*

Given an m x n matrix. If an element is 0, set its entire row and column to 0. Do it in-place

Follow up: 
    * a straight forward solution using 0(mn) space is probably a bad idea
    * a simple improvement uses O(m+n) space, but still not the best solution
    * could you devise a constant space solution

*/

// Brute force solution

var setZeroes = function (matrix) {
  let row = []
  let col = []

  // locate instance in row and col of matrix
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        row.push(i)
        col.push(j)
      }
    }
  }
  console.log(`row: ${row}`)
  console.log(`col: ${col}`)
  // convert row instance of zero to row of zeroes
  while (row.length) {
    for (let k = 0; k < matrix[0].length; k++) {
      matrix[row[row.length - 1]][k] = 0
    }
    row.pop()
  }

  // convert each col instance of zero to col of zeroes
  while (col.length) {
    matrix.forEach((row) => (row[col[col.length - 1]] = 0))
    col.pop()
  }

  return matrix
}

// tests:

// console.log(
//   setZeroes([
//     [1, 1, 1],
//     [1, 0, 1],
//     [1, 1, 1],
//   ])
// )

console.log(
  setZeroes([
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
  ])
)
