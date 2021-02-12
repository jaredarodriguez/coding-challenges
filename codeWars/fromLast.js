// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.

const { LinkedList } = require('./linkedlist')

function fromLast(list, n) {
  const list = new LinkedList()
  let slow = list.getFirst()
  let fast = list.getAt(n)

  while (fast.next) {
    slow = slow.next
    fast = fast.next
  }
  return slow
}
