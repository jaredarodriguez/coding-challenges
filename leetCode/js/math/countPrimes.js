/*

Count the number of prime numbers less than a non-negative number, n


input: n = 10
output: 4

input: n = 0
output: 0

*/

// test if it's divisible by : 2, 3, 4, 5, 6, 7, 8, 9

const countPrimes = function (n) {
  const isPrime = new Array(n).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;

  for (let i = 2; i * i < n; i++) {
    if (!isPrime[i]) continue;

    for (let j = i; i * j < n; j++) {
      isPrime[i * j] = false;
    }
  }
  return isPrime.reduce((count, isPrime) => {
    if (isPrime) count += 1;
    return count;
  }, 0);
};
