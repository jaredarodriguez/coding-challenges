/*

Given an array, rotate the array to the right by k steps, where k is non-negative.

Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
Could you do it in-place with O(1) extra space?

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

*/

// Solution 1
var rotate = function (nums, k) {
  newValArr = []
  for (let i = nums.length - k; i < nums.length; i++) {
    newValArr.push(nums[i])
  }
  let result = newValArr.concat(nums.splice(0, nums.length - k))
  return result
}

// Solution 2
var rotate = function (nums, k) {
  for (let i = 0; i < k; i++) {
    let x = nums.pop()
    nums.unshift(x)
  }
}
