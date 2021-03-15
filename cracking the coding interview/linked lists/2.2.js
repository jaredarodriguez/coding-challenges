/*

Implement an algorithm to find the kth to last element of a singly linked list.

*/

// iterative solution finding length
function nthToLastNode(head, k) {
  if ((head = null)) {
    return null
  }
  let temp = head
  let len = 1

  while (temp != null) {
    temp = temp.next
  }

  let returnPosition = k - len
  if (returnPosition < 0) {
    throw Error
  } else {
    while (returnPosition != 0) {
      head = head.next
      returnPosition -= 1
    }
  }
  return head
}

// iterative solution using two pointer approach
function nthToLastNode(head, k) {
  if ((head = null)) {
    return null
  }

  let p1 = head
  let p2 = head

  for (let i = 0; i < k - 1; i++) {
    p2 = p2.next
  }

  while (p2.next != null) {
    p1 = p1.next
    p2 = p2.next
  }

  return p1
}
