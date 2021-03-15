/*

Write code to remove duplicates from an unsorted linked

*/

function removeDuplicates() {
  if (head == null) {
    return null
  }
  let curr = head
  while (curr != null) {
    let runner = curr
    while (runner.next != null) {
      if ((runner.next.data = curr.data)) {
        runner.next = runner.next.next
      } else {
        runner = runner.next
      }
    }
    curr = curr.next
  }
}
