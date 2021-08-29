import unittest
from valid_palindrome import Solution

class testValidPalindrome(unittest.TestCase):
    def test_valid_palindrome(self):
        palindrome = Solution()
        self.assertEqual(palindrome.isPalindrome('A man, a plan, a canal: Panama'), True)
