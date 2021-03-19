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
Output: [0, 0, 1, 1, 1, 2, 2, 2]
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

/*
                    t                    h
Input: [0,  0,  1,  1,  1,  0,  1,  2,  2] 
                l                  
                        m          
Output: [0, 0, 1, 1, 1, 2, 2, 2]


*/
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

// Gap algorithm
function mergeArrGap(arr1, arr2) {
  let gap = Math.round(arr1.length + arr2.length / 2)

  let newArr = arr1.concat(arr2)

  while (gap > 1) {
    for (let i = 0; i < newArr.length; i++) {
      if (newArr[i] > newArr[i + gap]) {
        let temp = newArr[i + gap]
        let otherTemp = newArr[i]
        newArr[i] = temp
        newArr[i + gap] = otherTemp
      }
    }
    gap / 2
  }
  let arrOne = newArr.splice(0, arr1.length)
  let arrTwo = newArr
  return `arr1: ${arrOne}, arr2: ${arrTwo}`
}

/*
Kadane's algorithm: 

Given an integer in array nums, find the continguous subarray (containing at least one number) which has the largest sum and return its sum. 

Example: 
Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4]
Ouput: 6
Explanation: [4, -1, 2, 1] has the largest sum = 6

*/

// Brute force solution => Time: O(2n) Space: O(1)
function maxSum(arr) {
  let sp = 0
  let fp = 1
  let sum = 0
  let maxSum = arr[sp]

  while (sp < arr.length) {
    for (let i = fp; fp < arr.length; fp++) {
      sum += arr[fp]
      if (sum > maxSum) {
        maxSum = sum
      }
    }
    sp++
    fp = sp + 1
    sum = arr[sp]
  }

  return maxSum
}

// Kadane's algo => Time: O(n) Space: O(1)
function maxKadaneSum(arr) {
  let sum = 0
  let maxSum = arr[0]

  for (let i = 1; i < arr.length; i++) {
    sum += arr[i]
    if (sum > maxSum) {
      maxSum = sum
    } else if (sum < 0) {
      sum = 0
    }
  }
  return maxSum
}

// console.log(maxKadaneSum([-2, 1, -3, 4, -1, 2, 1, -5, 4]))

/* Merge Intervals

Given a collection of intervals, merge all overlapping intervals

Example 1: 

Input: [[1,3], [2,6], [8,10], [15,18]]
Output: [[1,6], [8,10], [15,18]]
Explanation: Since intervals [1,3] and [2,6 overlaps], merge them into [1,6]

*/

// iterate through 2d array comparing last index of index iteration to first index of indexes
// if indexed iteration is >= first index of indexes
// combine indexes
// splice the two arrays from the array

function mergeIntervals(arr) {
  let res = []

  if (arr.length == 0 || arr == null) {
    return res
  }

  arr.sort((a, b) => a[0] - b[0])

  console.log(arr)

  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] == null) {
      res.push(arr[i])
      return res
    }
    if (
      (arr[i][1] <= arr[i + 1][1] && arr[i][1] >= arr[i + 1][0]) ||
      arr[i][1] >= arr[i][0]
    ) {
      let start = arr[i][0]
      let end = arr[i + 1][1]
      res.push([start, end])
      arr.splice(arr[i + 1], 1)
    } else if (arr[i][1] >= arr[i + 1][1] && arr[i][0] <= arr[i + 1][0]) {
      let start = arr[i][0]
      let end = arr[i][1]
      res.push([start, end])
      arr.splice(arr[i + 1], 1)
    } else {
      res.push(arr[i])
    }
  }

  return res
}

/*
Find the Duplicate Number

Given an array nums containing n+1 integers where each integer is between 1 and n (inclusive), prove that at least one dupilcate number must exist. Assume that there is one duplicate number, find the duplicate one. 

Example: 
Input : [1, 3, 4, 2, 2]
Output: 2

*/

// hash map solution
var duplicateNumber = (arr) => {
  let hashMap = {}

  for (let i = 0; i < arr.length; i++) {
    if (!hashMap[arr[i]]) {
      hashMap[arr[i]] = 1
    } else if (hashMap[arr[i]]) {
      return arr[i]
    }
  }
}

//two pointer solution
var duplicateNumber = (arr) => {
  let sp = 0
  let count = 1
  while (sp <= arr.length - 1) {
    // let fp = count
    for (let i = count; count < arr.length; count++) {
      if (arr[sp] === arr[count]) {
        return arr[sp]
      }
    }
    count += 1
    sp += 1
  }
}

console.log(duplicateNumber([1, 3, 2, 8, 1]))
