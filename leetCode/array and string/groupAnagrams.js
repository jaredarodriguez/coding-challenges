/*

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

*/

var groupAnagrams = function (strs) {
  const groups = {}

  for (let i = 0; i < strs.length; i++) {
    let sort = strs[i].split('').sort().join('')

    if (!groups[sort]) {
      groups[sort] = [strs[i]]
    } else {
      groups[sort].push(strs[i])
    }
  }

  return Object.values(groups)
}

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']))

// const charCode = (word) => {
//   let sum = 0
//   for (let i = 0; i < word.length; i++) {
//     sum += word.charCodeAt(i)
//   }
//   return sum
// }

// let matchStrs = []
// let curr = 0

// while (curr < strs.length && strs.length) {
//   if (strs.length === 1) {
//     matchStrs.push(strs[0])
//     strs.splice(0, 1)
//   }
//   let curr = 0
//   for (let i = curr; curr < strs.length; curr++) {
//     if (charCode(strs[curr]) === charCode(strs[curr + 1])) {
//       matchStrs.push(charCode(strs[curr + 1]))
//       strs.splice(strs[curr + 1], 1)
//     }
//     curr += 1
//   }
// }
// return matchStrs
