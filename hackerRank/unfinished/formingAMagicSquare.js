/* 

We define a magic square to be an n x n matrix of distinct positive integers from 1 to n^2 where the sum of any row, column, or diagonal of length n is always equal to the same number: the magic constant.

You will be given a  matrix 3 x 3 of integers in the inclusive range [1,9]. We can convert any digit a to any other digit b in the range [1,9] at cost of [a-b]. Given s, convert it into a magic square at minimal cost. Print this cost on a new line.

Note: The resulting magic square must contain distinct integers in the inclusive range [1,9].

Example
$s = [[5, 3, 4], [1, 5, 8], [6, 4, 2]]

the matrix looks like: 
5 3 4
1 5 8
6 4 2

converted to a magic square looks like: 
8 3 4
1 5 9
6 7 2

This took three replacements at a cost of |5-8|+|8-9|+|4-7| = 7
*/

function magicSquare(arr) {
  let firstRow = arr[0]
  let secondRow = arr[1]
  let thirdRow = arr[2]
  let perfectSum = 15
  let minSum = 6
  let maxSum = 24
  const rowSum = (row) => {
    return row.reduce((acc, curr) => {
      return acc + curr
    })
  }
  let firstRowSum = rowSum(firstRow)
  let secondRowSum = rowSum(secondRow)
  let thirdRowSum = rowSum(thirdRow)

  console.log(
    `first : ${firstRowSum}, second: ${secondRowSum}, third: ${thirdRowSum}`
  )
}

magicSquare([
  [5, 3, 4],
  [1, 5, 8],
  [6, 4, 2],
])
