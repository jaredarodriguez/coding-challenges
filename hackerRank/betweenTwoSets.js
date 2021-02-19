/* 

There will be two arrays of integers. Determine all integers that satisfy the following two conditions:

The elements of the first array are all factors of the integer being considered
The integer being considered is a factor of all elements of the second array
These numbers are referred to as being between the two arrays. Determine how many such numbers exist.

*/

function getTotalX(a, b) {
  let sortedA = a.sort()
  let sortedB = b.sort()
  let maxA = sortedA[sortedA.length - 1]
  let maxB = sortedB[sortedB.length - 1]
  let total = 0
  if (maxA % sortedA[0] !== 0) {
    return 0
  }

  function recursiveCheck() {
    if (maxA > maxB) {
      return total
    }
    for (let i = 0; i < sortedB.length; i++) {
      if (maxA % sortedB[i] !== 0) {
        return total
      }
    }
    max *= 2
    total += 1
  }
  recursiveCheck()
}

console.log(getTotalX([2, 6], [24, 36]))
