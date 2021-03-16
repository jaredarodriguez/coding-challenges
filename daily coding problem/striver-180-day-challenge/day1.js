// Arrays

/* Sort an array of 0s, 1s and 2s without using extra space or sorting algo 

Example: 
Input: []
Output: []

Input: [1]
Output: [1]
                                   
Input: [0,  1,  2,  0,  1,  0,  1,  2,  2] 
                m           
            l
Output: [0, 0, 1, 2, 2]
*/

// counting sort => Time O(n log n) Space: 0(N)
var countingSort = (arr) => {
  let zeroCount = 0
  let oneCount = 0
  let twoCount = 0
  let sortArr = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      zeroCount += 1
    } else if (arr[i] == 1) {
      oneCount += 1
    } else if (arr[i] == 2) {
      twoCount += 1
    } else {
      continue
    }
  }

  function insertCount(num, el) {
    for (let i = 0; i < num; i++) {
      sortArr.push(el)
    }
  }

  insertCount(zeroCount, 0)
  insertCount(oneCount, 1)
  insertCount(twoCount, 2)

  return sortArr
}

// low, mid, high pointer solution, aka Dutch National Flag Algo => Time : O(N), Space: O(1)

var sort = (arr) => {
  let low = 0
  let high = arr.length - 1
  let mid = 0

  while (mid <= high) {
    switch (arr[mid]) {
      case 0: {
        temp = arr[low]
        arr[low] = arr[mid]
        arr[mid] = temp
        low++
        mid++
        break
      }
      case 1: {
        mid++
        break
      }
      case 2: {
        temp = arr[mid]
        arr[mid] = arr[high]
        arr[high] = temp
        high--
        break
      }
    }
  }
  return arr
}

/* Repeat and Missing Number 

Given an unsorted array of size n. Array elements are in the range from 1 to n. One number from set {1, 2, ...n} is missing and one number occurs twicein the array. Find these two numbers
 
*/

// hash map approach => Time : O(2N), Space : O(N)
function repeatAndMissing(arr) {
  let numMap = {}
  let missingNum
  let repeatedNum

  for (let i = 0; i < arr.length; i++) {
    if (!numMap[arr[i]]) {
      numMap[arr[i]] = 1
    } else {
      numMap[arr[i]] += 1
    }
  }

  for (let j = 0; j < arr.length; j++) {
    if (!numMap[j]) {
      missingNum = j
    }

    if (numMap[j] > 1) {
      repeatedNum = j
    }
  }
  console.log(`Missing = ${missingNum}, Repeating = ${repeatedNum}`)
}

repeatAndMissing([4, 3, 6, 2, 1, 1])

/* Merge two sorted arrays with 0(1) extra space

We are given two sorted arrays. We need to merge these two arrays such that the initial numbers (after complete sorting) are in the first array and the remaining numbers are in the second array.

Input: [10], [2, 3]
Output: [2], [3, 10]

Input: 

[1, 2,  3,  5, 8, 9]               
               i
[20, 15,  10,  13]                  


Output: [1, 2, 3, 5, 8, 9], [10, 13, 15, 20]
*/

// Brute force solution
function mergeArr(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] > arr2[j]) {
        let temp = arr1[i]
        let otherTemp = arr2[j]
        arr1[i] = temp
        arr2[j] = otherTemp
        break
      }
    }
  }
  arr2.sort()

  return `arr1: ${arr1}, arr2: ${arr2}`
}

console.log(mergeArr([1, 2, 3, 5, 8, 9], [20, 15, 10, 13]))
