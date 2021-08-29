"""

Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

"""

class Solution:
    def isPalindrome(self, s):
        s = ''.join(filter(str.isalnum, s)).lower()
        tmp_s = s
        s = list(tmp_s)
        s.reverse()
        s = ''.join(s)

        return s == tmp_s



