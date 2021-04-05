/*

Given a string s, return the first non-repeating character in it and return its index. If it does not exist, return -1.

*/

var firstUniqChar = function (s) {
  let stringMap = {}
  for (let i = 0; i < s.length; i++) {
    if (!stringMap[s[i]]) {
      stringMap[s[i]] = 1
    } else {
      stringMap[s[i]] += 1
    }
  }
  for (let j = 0; j < s.length; j++) {
    if (stringMap[s[j]] === 1) {
      return j
    }
  }
  return -1
}

word = 'aabb'

console.log(firstUniqChar(word))
