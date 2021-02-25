/*

Given two strings, write a method to decide fi one is a permutation of the other.

*/

// using sort

var isPermutationSort = (str1, str2) => {
  if (str1.length != str2.length) {
    return false
  }
  let str1Sort = str1.split('').sort()
  let str2Sort = str2.split('').sort()
  for (let char in str1Sort) {
    for (char in str2Sort) {
      if (str1Sort[char] != str2Sort[char]) {
        return false
      }
    }
  }
  return true
}

var isPermuationMap = (str1, str2) => {
  let result = true
  if (str1.length != str2.length) {
    result = false
  }
  // make a hash map for both strings
  let str1Map = {}
  let str2Map = {}
  for (let char in str1) {
    if (!str1Map[str1[char]]) {
      str1Map[str1[char]] = 1
    } else str1Map[str1[char]] += 1
  }
  for (let char in str2) {
    if (!str2Map[str2[char]]) {
      str2Map[str2[char]] = 1
    } else {
      str2Map[str2[char]] += 1
    }
  }
  //   run comparison on values of each char
  for (let el in str1Map) {
    for (let char in str2Map) {
      if (str1Map[el] !== str2Map[char]) {
        result = false
      }
    }
  }
  console.log(result)
}

// // using ASCII values to compare
// var isPermutationASCII = (str1, str2) => {
//   // check base case
//   if (str1.length !== str2.length) {
//     return false
//   }
//   //   obtain ASCII val
//   let ASCIIval = (str) => {
//     let count = 0
//     for (let i = 0; i < str.length; i++) {
//       count += str.charCodeAt(str[i])
//     }
//     return count
//   }
//   console.log(ASCIIval(str1), ASCIIval(str2))
// }

// console.log(isPermutationASCII('earf', 'fear'))
