"""
Exercise : Balanced Brackets
Given a string containing only square brackets, "[]", y omust check whether the brackets are balanced or not. The brackets are said to be balanced if, for every opening bracket, there is a closing bracket. Check_balance() should return a Boolean. Empty string will return True
"""

def check_balance(brackets):
    count = 0
    for bracket in brackets:
        if bracket == "[":
            count += 1

        if bracket == "]":
            count -=1

    return count == 0

# test = "[[[]]][][]]][[]"

# print(check_balance(test))