/* Given a 6x6 2d array find the hourglass sum. An hourglass in an arr is a subset of values with indices falling in this pattern in arr's graphical representation: 

    a b c
      d
    e f g

Tehre are 16 hourglasses in arr. An hourglass sum is the sum of the hourglass' values. Calculate teh hourglass usm ofr ever hourglass arr, then print the maximum hourglass sum. The array will always be 6 x 6
*/

function arrayDS(arr) {
  let pyramidSums = []
  let max = 0
  // iterate by row up to (length - 1)
  // each row iteration leap two rows
  // first row leap push index (0-3) and increase by 1
  // second row leap push index (1) and increase by 1
  // third row leap push index (0-3) and increase by 1
  // TODO: configure temp holding arr for each pyramid iteration so that reduce method can be performed
  arr.forEach()

  pyramidSums.forEach((num) => {
    if (num > max) {
      max = num
    }
  })
  return max
}

console.log(
  arrayDS([[111000], [010000], [111000], [002440], [000200], [001240]])
)
