/*

Given the head of a singly linked list, reverse the list, and return the reversed list.

Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?

*/

// Iteratively

var reverseList = function (head) {
  let prev = null
  let curr = head
  let nextTemp = curr.nextTemp

  while (curr != null) {
    nextTemp = curr.next
    curr.next = prev
    prev = curr
    curr = nextTemp
  }
  return prev
}
