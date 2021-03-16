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

// counting sort
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

console.log(countingSort([0, 2, 2, 1, 2, 0, 1]))
