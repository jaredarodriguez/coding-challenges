"""

You must write the fib() function which takes in a positive integer, n, and returns the n-th Fibonacci number. However, instead of using recursion, your function must use any of the loops.

"""

def fib(n):
    first = 0
    second = 1
    result = 0
    if (n <= 0):
        return -1
    for i in range(1, n):
        temp = result
        result = first + second
        first = temp
        second = result
    return result

print(fib(7))





