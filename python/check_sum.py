"""

Implement check_sum() fn which takes in a list and returns True if the sum fo two numbers in the list is zero. If no such pair exists, return False.

"""
sample_list = [10, -14, 26, 5, -3, 13, -5]

def check_sum(num_list):
    index = 0
    while index < len(num_list) - 1:
        for i in range (index + 1, len(num_list)):
            if num_list[index] + num_list[i] == 0:
                return True
        index += 1
    return False