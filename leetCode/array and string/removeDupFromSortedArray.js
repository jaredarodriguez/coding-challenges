/*

Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

*/

var removeDuplicates = function (nums) {
  let index = 1
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] != nums[i + 1]) {
      nums[index++] = nums[i + 1]
    }
  }
  return index
}

//  using while loop

var removeDuplicates = (nums) => {
  if (nums.length == 0) return 0
  let i = 0
  let j = 1
  while (j < nums.length) {
    if (nums[i] != nums[j]) {
      i++
      nums[i] = nums[j]
      j++
    } else {
      j++
    }
  }
  return i + 1
}
