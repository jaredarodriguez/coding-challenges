/*

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?

*/

/* Map solution

var singleNumber = function (nums) {
  let numsMap = {}
  for (let i = 0; i < nums.length; i++) {
    if (!numsMap[nums[i]]) {
      numsMap[nums[i]] = 1
    }
    numsMap[nums[i]] += 1
  }
  for (let num in numsMap) {
    if (numsMap[num] == 1) {
      return num
    }
  }
}

*/

/*
using Bit manipulation
*/

var singleNumber = function (nums) {
  let a = 0
  for (i of nums) {
    a ^= i
  }
  return a
}

console.log(singleNumber([0, 1, 0, 1, 5]))
