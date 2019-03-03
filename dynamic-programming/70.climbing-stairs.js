/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 *
 * https://leetcode.com/problems/climbing-stairs/description/
 *
 * algorithms
 * Easy (43.16%)
 * Total Accepted:    346.6K
 * Total Submissions: 803K
 * Testcase Example:  '2'
 *
 * You are climbing a stair case. It takes n steps to reach to the top.
 * 
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can
 * you climb to the top?
 * 
 * Note: Given n will be a positive integer.
 * 
 * Example 1:
 * 
 * 
 * Input: 2
 * Output: 2
 * Explanation: There are two ways to climb to the top.
 * 1. 1 step + 1 step
 * 2. 2 steps
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 3
 * Output: 3
 * Explanation: There are three ways to climb to the top.
 * 1. 1 step + 1 step + 1 step
 * 2. 1 step + 2 steps
 * 3. 2 steps + 1 step
 * 
 * 
 */
/**
 * 爬楼梯
 * - dp 方法求解
 * - 定义 allWays、twoStepBefore、oneStepBefore
 * - 分别处理三个变量
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
  if (n <= 2) { return n; }

  let allWays = 0;
  let twoStepBefore = 1;
  let oneStepBefore = 2;

  for (let i = 2; i < n; i++) {
    allWays = oneStepBefore + twoStepBefore;
    twoStepBefore = oneStepBefore;
    oneStepBefore = allWays;
  }

  return allWays;
}

// 递归写法存在大量重复计算
// const map = new Map();
// function climbStairs(n) {
//   if (n <= 2) {
//     return n;
//   }

//   if (map.has(n)) { return map.get(n); }

//   const stairs = climbStairs(n - 1) + climbStairs(n - 2);
//   map.set(n, stairs);
//   return stairs;
// }