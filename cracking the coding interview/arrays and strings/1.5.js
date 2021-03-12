/*

Implement a method to perform basic string compression using the counts of repeated characters. For example, the string 'aabcccccaaa' would become a2b1c5a3. If the 'compressed' string would not become smaller than the original string, your method should return the original string.

*/

var compressedString = (str) => {
  let diffValFromPrev = 0
  let repeatCount = 1
  let compressedStr = ''

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      repeatCount += 1
    } else {
      compressedStr += str[i] + repeatCount
      repeatCount = 1
      diffValFromPrev += 1
    }
  }

  if (diffValFromPrev == str.length) {
    return str
  } else {
    return compressedStr
  }
}

// console.log(compressedString('abca'))
// console.log(compressedString('aabbca'))
// console.log(compressedString('aabbccccaa'))
