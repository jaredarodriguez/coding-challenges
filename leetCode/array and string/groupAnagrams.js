/*

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

*/

var groupAnagrams = function (strs) {
  // find charCode of each word
  var charCode = (word) => {
    let count = 0
    for (let i = 0; i < word.length; i++) {
      count += word.charCodeAt(i)
    }
    return count
  }

  let output = []
  let curr = 0
  let runner = 1

  while (curr < strs.length) {
    let matchArr = []
    for (let i = runner; runner < strs.length; runner++) {
      console.log(
        `strs[curr]  & charCode: ${strs[curr]} & ${charCode(strs[curr])}`
      )
      console.log(
        `strs[runner] & charCode: ${strs[runner]} & ${charCode(
          strs[runner]
        )} \n`
      )
      if (charCode(strs[curr]) == charCode(strs[runner])) {
        matchArr.push(strs[runner])
      }
    }
    runner += 1
    curr += 1
    output.push(matchArr)
  }
  //   return output
}

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']))
