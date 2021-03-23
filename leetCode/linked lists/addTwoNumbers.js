/* 

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example: 
Input: l1 = [2, 4, 3], l2 = [5, 6, 4]
Output: [7, 0, 8]
Explanation: 342 + 465 = 807

Input: l1 = [9, 10, 10, 10*, 9, 9, 9, null], l2 = [9, 9, 9, 9, null]
Output: [8, 9, 9, 9, 0, 0, 0, 1]

arrOutput = [8, 9, 9, 9, ]
9 + 9 = 18 => 8
% 1 + 9 = 10
10 + 9 = 19 => 9
% 1 + 9 = 10 
10 + 9 = 19 => 9
% 1 + 9 = 10
10 + 9 = 19 => 9
1 + 9 = 10
10 + 9 = 19 => 9
1 + 9 = 10 => 0
1 + 9 = 10 => 0
@null with 10 left = 1

// add l1.val.head to l2.val.head
// if sum is greater than single-digit value, cache tenth digit value and add single digit value to arr
// while active list add curr val with cache tenth digit val
// once active list ends add tenth cache val to arr
// return reverse arr

*/

function addTwoNumbers(l1, l2) {
  let sum = 0
  let current = new ListNode(0)
  let result = current

  while (l1 || l2) {
    if (l1) {
      sum += l1.val
      l1 = l1.next
    }

    if (l2) {
      sum += l2.val
      l2 = l2.next
    }

    current.next = new ListNode(sum % 10)
    current = current.next

    sum = sum > 9 ? 1 : 0
  }

  if (sum) {
    current.next = new ListNode(sum)
  }

  return result.next
}
