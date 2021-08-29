/*

You are given an array prices for which the ith element is the price of a given stock on day i.

Find the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

Example:
Input: prices = [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.

*/

var maxProfit = (prices) => {
  let profit = 0
  let p1 = 0
  let p2 = 1
  while (p2 < prices.length) {
    if (prices[p2] > prices[p1]) {
      profit += prices[p2] - prices[p1]
    }
    p2 += 1
    p1 += 1
  }
  return profit
}
