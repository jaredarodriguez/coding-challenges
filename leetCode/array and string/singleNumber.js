/*

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?

*/

// two pointer solution
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

singleNumber([4, 1, 2, 1, 2])
