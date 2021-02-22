/* 

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example: 
Input: l1 = [2, 4, 3], l2 = [5, 6, 4]
Output: [7, 0, 8]
Explanation: 342 + 465 = 807

*/

function addTwoNumbers(l1, l2) {}

// function addTwoNumbers(l1, l2) {
//   let head = null
//   let temp = null
//   let carry = 0
//   while (l1 !== null || l2 !== null) {
//     let sum = carry
//     if (l1 != null) {
//       sum += l1.val
//       l1 = l1.next
//     }
//     if (l2 != null) {
//       sum += l2.val
//       l2 = l2.next
//     }

//     let node = new ListNode(Math.floor(sum) % 10)
//     carr = Math.floor(sum / 10)

//     if (temp == null) {
//       temp = head = node
//     } else {
//       temp.next = node
//       temp.next
//     }
//   }
//   if (carry > 0) {
//     temp.next = new ListNode(carry)
//   }
//   return head
// }
