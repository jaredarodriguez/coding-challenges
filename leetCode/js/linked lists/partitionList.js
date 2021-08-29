/*

Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x. 

You should preserve the orginal relative order of the nodes in each of the two partitions

Input: head = [1, 4, 3, 2, 5, 2], x = 3
Output: [1, 2, 2, 4, 3, 5]

Input: head = [2, 1], x = 2
Output: [1, 2]

 */

var partition = function (head, x) {
  let before = new ListNode(0)
  let before_head = before
  let after = new ListNode(0, null)
  let after_head = after
  while (head !== null) {
    if (head.val < x) {
      before.next = new ListNode(head.val, null)
      before = before.next
    } else {
      after.next = new ListNode(head.val, null)
      after = after.next
    }
    head = head.next
  }

  before.next = after_head.next
  return before_head.next
}
