/* 

You are choreographing a circus show with various animals. For one act, you are given two kangaroos on a number line ready to jump in the positive direction (i.e, toward positive infinity).

The first kangaroo starts at location x1 and moves at a rate of v1 meters per jump.

The second kangaroo starts at location x2 and moves at a rate of v2 meters per jump.

You have to figure out a way to get both kangaroos at the same location at the same time as part of the show. If it is possible, return YES, otherwise return NO.

For example, kangaroo 1 starts at x1 = 2 with a jump distance v1 = 1 and kangaroo 2 starts at x2 = 1 with a jump distance of v2 = 2. After one jump, they are both at x=3, (x1 + v1 = 2 + 1, x2 + v2 = 1 + 2 ), so our answer is YES.

Complete the function kangaroo in the editor below. It should return YES if they reach the same position at the same time, or NO if they don't.

kangaroo has the following parameter(s):

x1, v1: integers, starting position and jump distance for kangaroo 1
``
x2, v2: integers, starting position and jump distance for kangaroo 2

*/

function kangaroo(x1, v1, x2, v2) {
  let currX1 = x1 + v1
  let currX2 = x2 + v2
  let jumpCount = 0
  let result

  while (jumpCount <= 10000) {
    if (
      //determine if either start pos and jump length has potential of meeting the other
      (x1 < x2 && v1 < v2) ||
      (x2 < x1 && v2 < v1)
    ) {
      result = 'NO'
    } else if (
      // determine if either curr position and jump length is greater than other
      (v1 > v2 && currX1 > currX2) ||
      (v2 > v1 && currX2 > currX1)
    ) {
      result = 'N0'
    }
    if (currX1 === currX2) {
      result = 'YES'
      break
    } else {
      jumpCount += 1
      currX1 += v1
      currX2 += v2
    }
    result = 'NO'
  }
  return result
}

console.log(kangaroo(0, 3, 4, 2))
