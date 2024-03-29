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
  let curr = new ListNode(null)
  let dummy = new ListNode(0, curr)
  let carry = 0
  let round = 0

  while (l1 || l2) {
    sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry
    console.log(`
        sum : ${sum}
        round: ${round}
        carry: ${carry}
`)
    if (sum > 9) {
      carry = Math.floor(sum / 10)
      sum = sum % 10
      tmpNode = new ListNode(null)
      curr.val = sum
      curr.next = tmpNode
      curr = tmpNode
    } else {
      tmpNode = new ListNode(null)
      curr.val = sum
      curr.next = tmpNode
      curr = tmpNode
    }
    l1 ? (l1 = l1.next) : (l1 = null)
    l2 ? (l2 = l2.next) : (l1 = null)
  }

  if (carry != 0) {
    tmpNode = new ListNode(null)
    curr.val = carry
    curr.next = tmpNode
  } else {
    return dummy.next
  }
}
