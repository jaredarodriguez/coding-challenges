/*

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

time : O(3n) ==> O(n), space : O(n)
*/

var isAnagram = (s, t) => {
  let stringMap = {}
  let result = true
  for (let i = 0; i < s.length; i++) {
    if (!stringMap[s[i]]) {
      stringMap[s[i]] = 1
    } else {
      stringMap[s[i]] += 1
    }
  }
  for (let j = 0; j < t.length; j++) {
    if (stringMap[t[j]]) {
      stringMap[t[j]] -= 1
    } else {
      ;``
      stringMap[t[j]] = 1
    }
  }

  console.log(stringMap)
  values = Object.values(stringMap)
  const sum = values.reduce((a, b) => a + b)
  console.log(`sum : ${sum}`)
  keys = Object.keys(stringMap)
  keys.forEach((key) => {
    if (stringMap[key] !== 0) {
      result = false
    }
  })

  return result
}

// console.log(isAnagram('anagram', 'nagaram')) // ==> true
console.log(isAnagram('rat', 'car')) // ==> false

// map
// r : 0
// a : 0
// t : 1
// c : 1
