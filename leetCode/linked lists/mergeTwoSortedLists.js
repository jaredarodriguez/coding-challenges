/*

Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

*/
function ListNode(val, next) {
  this.val = val == undefined ? 0 : val
  this.next = next === undefined ? null : next
}

var mergeTwoLists = function (l1, l2) {
  let dummy = ListNode(-1)
  let head = dummy
  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      head.next = l1
      l1 = l1.next
    } else {
      head.next = l2
      l2 = l2.next
    }
    head = head.next
  }
  if (l1 != null) {
    head.next = l1
  } else {
    head.next = l2
  }
  return dummy.next
}
