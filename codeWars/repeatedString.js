/* There is a string, , of lowercase English letters that is repeated infinitely many times. Given an integer, , find and print the number of letter a's in the first  letters of the infinite string.
 */

function repeatedString(s, n) {
  let q = Math.floor(n / s.length)
  let r = n % s.length
  let remainderWord = s.slice(0, r)
  const numOfOccurences = (str) => {
    let strArr = str.split('')
    return strArr.filter((char) => char === 'a').length
  }
  let fullCount = q * numOfOccurences(s)
  let remainderCount = numOfOccurences(remainderWord)
  return fullCount + remainderCount
}

console.log(repeatedString('abcac', 10))
