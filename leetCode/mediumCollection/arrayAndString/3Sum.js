/*

Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Notice that the solution set must not contain duplicate triplets.

*/

// [-1, 0, 1, 2, -1, 4]
// tripSumArr = push(i, j, k)
// it 1
// i = 0; j = 1; k = 2;
// 1, 0, 1
// 1, 0, -1
// 1, 0, 4
// i = 1; j = 2, k = 3
// 0, 1, 3

function threeSum(arr) {
  arr.sort((a, b) => a - b)
  let tripSum = []
  for (let curr = 0; curr < arr.length - 2; curr++) {
    if (arr[curr] != arr[curr - 1]) {
      let next = curr + 1
      let end = arr.length - 1
      while (next < end) {
        const result = arr[curr] + arr[next] + arr[end]
        if (result === 0) {
          tripSum.push([arr[curr], arr[next], arr[end]])
          while (arr[next] == arr[next + 1]) {
            next++
          }
          while (arr[end] == arr[end - 1]) {
            end--
          }
          next++
          end--
        } else if (result < 0) {
          next++
        } else if (result > 0) {
          end--
        }
      }
    }
  }
  return tripSum
}

let exampleArr = [-1, 0, 1, 2, -1, 4]

console.log(threeSum(exampleArr))
