/* There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are
 */

let arr = [1, 2, 1, 2, 1, 3, 2]

function sockMerchant(arr) {
  let map = {}
  let pairCount = 0
  for (let i = 0; i < arr.length; i++) {
    if (!map[arr[i]]) {
      map[arr[i]] = 1
    } else {
      map[arr[i]] += 1
    }
  }
  for (let sock in map) {
    // check for pair
    let pairs = Math.floor(map[sock] / 2)
    pairCount += pairs
  }
  return pairCount
}

sockMerchant(arr)
