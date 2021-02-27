/*

Given the head of a linked list, remove the nth node from the end of the list and return its head.

Follow up: Could you do this in one pass?

*/

var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(0, head)
  let left = head
  let right = head
  while (n > 0 && right) {
    right = right.next
    n -= 1
  }
  while (right) {
    left = left.next
    right = right.next
  }
  left.next = left.next.next
  return dummy.next
}
