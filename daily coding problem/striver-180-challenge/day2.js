/*

Next permutation

Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

If such arrangement is not possible, it must rearrange it as the lowest possible order (i.e. - sorted in ascending order)

The replacement must be in-place and use only constant extra memory

Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column

1, 2, 3 -> 1, 3, 2
3, 2, 1 -> 1, 2, 3
1, 1, 5 -> 1, 5, 1

*/

var nextPermutation = (arr) => {
  if (arr == null || arr.length <= 1) return
  let i = arr.length - 2

  function swap(arr, i, j) {
    let tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
  }

  function reverse(arr, i, j) {
    while (i < j) {
      swap(arr, i++, j--)
    }
  }

  while (i >= 0 && arr[i] >= arr[arr[i + 1]]) i--
  if (i >= 0) {
    let j = arr.length - 1
    while (arr[j] <= arr[i]) j--
    swap(arr, i, j)
  }
  reverse(arr, i + 1, arr.length - 1)
}

/* Inversion Array (using Merge sort)

Inversion count for an array indicates - how far (or close) the array is from being sorted. If array is already sorted then the inversion count is 0. If array is sorted in reverse order that inversion count is the maximum. 

Formally speaking, two elements a[i] and a[j] form an inversion if a[i] > a[j] and i < j 

Example: 
Input: arr[] = {8, 4, 2, 1}
Output: 6
Explanation: Given array has six inversions: 
(8, 4), (4, 2), (8, 2), (8, 1), (4, 1), (2, 1)

*/

// Brute force solution (bad solution) => time: 0(n^2) space: 0(1)

function inversionCount(arr) {
  let count = 0
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        count += 1
      }
    }
  }
  return count
}

console.log(inversionCount([8, 4, 2, 1]))
