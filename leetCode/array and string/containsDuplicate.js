/*

Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

*/

var containsDuplicate = function (nums) {
  if (nums.length) {
    let numsMap = {}
    for (let num of nums) {
      if (!numsMap[num]) {
        numsMap[num] = 1
      } else {
        numsMap[num] += 1
      }
    }
    for (let key in numsMap) {
      if (numsMap[key] > 1) {
        return true
      }
    }
  }
  return false
}
