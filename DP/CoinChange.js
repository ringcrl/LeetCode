/**
 * https://leetcode.com/problems/coin-change/
 * 
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

console.log(coinChange([1, 2, 5], 11));