/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * 
 * 买卖股票的最好时机
 * 1. 一次遍历，找到最小值与最大利润
 * 2. 当前 price - min 就是当前利润
 * 
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  let min = prices[0];
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    const price = prices[i];
    min = Math.min(min, price);
    profit = Math.max(profit, price - min);
  }

  return profit;
};