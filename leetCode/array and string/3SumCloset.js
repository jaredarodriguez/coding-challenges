/*

Given an array nums of n integers and an integer target, find three integers in nums such that the sum is cloest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

Example 1: 
Input: nums = [1, 2, 1, -4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2)

 */

var threeSumClosest = (nums, target) => {
  let diff = Number.MAX_SAFE_INTEGER
  let sz = nums.length

  nums.sort()

  for (let i = 0; i < sz && diff !== 0; i++) {
    let lo = i + 1
    let hi = sz - 1

    while (lo < hi) {
      let sum = nums[i] + nums[lo] + nums[hi]
      if (Math.abs(target - sum) < Math.abs(diff)) {
        diff = target - sum
      }
      if (sum < target) {
        lo += 1
      } else {
        hi -= 1
      }
    }
  }
  return target - diff
}
