let arr = [
  [1, 2, 3, 4, 5, 6],
  [2, 3, 4, 5, 6, 7],
  [3, 4, 5, 6, 7, 8],
  [4, 5, 6, 7, 8, 9],
  [5, 6, 7, 8, 9, 10],
  [6, 7, 8, 9, 10, 11],
]

function hourGlassSum(arr) {
  let max = -63
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      let sum = 0
      sum =
        arr[i][j] +
        arr[i][j + 1] +
        arr[i][j + 2] +
        arr[i + 1][j + 1] +
        arr[i + 2][j] +
        arr[i + 2][j + 1] +
        arr[i + 2][j + 2]
      max = max < sum ? sum : max
    }
  }
  return max
}
