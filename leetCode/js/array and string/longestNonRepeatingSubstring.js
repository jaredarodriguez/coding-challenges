/*

Given a string s, find the length of the longest substring without repeating characters.

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

*/

const lengthOfLongestSubstring = (s) => {
  let longest = 0;
  let start = 0;
  const seen = {};

  [...s].forEach((char, i) => {
    console.log(`
    seen[char] : ${seen[char]}
    start : ${start}
    `);
    if (char in seen && start <= seen[char]) {
      longest = Math.max(i - start, longest);
      start = seen[char] + 1;
    }

    seen[char] = i;
  });

  return Math.max(s.length - start, longest);
};

console.log(lengthOfLongestSubstring('abcdefgazc'));
