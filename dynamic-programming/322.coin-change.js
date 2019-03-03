/*
 * @lc app=leetcode id=322 lang=javascript
 *
 * [322] Coin Change
 *
 * https://leetcode.com/problems/coin-change/description/
 *
 * algorithms
 * Medium (28.76%)
 * Total Accepted:    158K
 * Total Submissions: 549.1K
 * Testcase Example:  '[1,2,5]\n11'
 *
 * You are given coins of different denominations and a total amount of money
 * amount. Write a function to compute the fewest number of coins that you need
 * to make up that amount. If that amount of money cannot be made up by any
 * combination of the coins, return -1.
 * 
 * Example 1:
 * 
 * 
 * Input: coins = [1, 2, 5], amount = 11
 * Output: 3 
 * Explanation: 11 = 5 + 5 + 1
 * 
 * Example 2:
 * 
 * 
 * Input: coins = [2], amount = 3
 * Output: -1
 * 
 * 
 * Note:
 * You may assume that you have an infinite number of each kind of coin.
 * 
 */
/**
 * 零钱兑换
 * 1. 状态：dp[i] 的最小步数
 * 2. dp 方程：Math.min{ dp[i - coins[j]] }
 * 
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = function (coins, amount) {
  const dp = new Array(amount + 1);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    dp[i] = Number.MAX_SAFE_INTEGER;
    coins.forEach(coin => {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    });
  }
  return dp[amount] === Number.MAX_SAFE_INTEGER ? -1 : dp[amount];
};

/**
 * 零钱兑换
 * 1. 递归版本，无法通过测试，但是思路简单
 * 2. 使用 hepler 方法，每次深入的时候传入剩余值和 list
 * 3. 穷举出所有可能的结果，返回最短的结果
 * 
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = function (coins, amount) {
  const res = [];
  hepler(amount, []);
  return res.reduce((prev, curr) => {
    return Math.min(curr.length, prev);
  }, Number.MAX_SAFE_INTEGER);


  function hepler(amount, list) {
    if (amount === 0) {
      res.push(list.slice());
      return;
    }

    if (amount < 0) {
      return;
    }
    
    for (let i = 0; i < coins.length; i++) {
      const coin = coins[i];
      const newList = list.slice();
      newList.push(coin);
      hepler(amount - coin, newList);
    }
  }
};