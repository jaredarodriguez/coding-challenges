/*

Given the head of a singly linked list, return true if it is a palindrome.

*/

var isPalindrome = function (head) {
  if (head.next == null) {
    return true
  }
  // find middle of list

  let fp = head
  let sp = head
  let mid = new ListNode(0)
  while (fp !== null && fp.next !== null) {
    fp = fp.next.next
    sp = sp.next
  }

  if (fp === null) {
    mid = sp
  } else {
    mid = sp.next
  }

  // reverse list from midpoint

  let prev = null

  while (mid !== null) {
    let temp = mid.next
    mid.next = prev
    prev = mid
    mid = temp
  }

  // console.log(`prev: ${prev.next.val}` )

  // test if 2nd and 1st halves make a pallindrome
  while (head !== null && prev !== null) {
    if (head.val !== prev.val) {
      return false
    }
    head = head.next
    prev = prev.next
  }
  return true
}
