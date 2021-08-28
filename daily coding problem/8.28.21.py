"""

This problem was asked by Cisco.

Given an unsigned 8-bit integer, swap its even and odd bits. The 1st and 2nd bit should be swapped, the 3rd and 4th bit should be swapped, and so on.

For example, 10101010 should be 01010101. 11100010 should be 11010001.

"""

def swap_bits(x):
    # get all even bits
    even_bits = x & 0xAAAAAAAA
    # get all odd bits
    odd_bits = x & 0x55555555

    # Right shift even bits
    even_bits >>= 1
    # Left shift odd bits
    odd_bits <<= 1

    # Combine even and odd bits
    return (even_bits | odd_bits)

print(swap_bits(10))