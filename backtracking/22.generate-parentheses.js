/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 *
 * https://leetcode.com/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (52.74%)
 * Total Accepted:    296.1K
 * Total Submissions: 560.2K
 * Testcase Example:  '3'
 *
 * 
 * Given n pairs of parentheses, write a function to generate all combinations
 * of well-formed parentheses.
 * 
 * 
 * 
 * For example, given n = 3, a solution set is:
 * 
 * 
 * [
 * ⁠ "((()))",
 * ⁠ "(()())",
 * ⁠ "(())()",
 * ⁠ "()(())",
 * ⁠ "()()()"
 * ]
 * 
 */
/**
 * backtracking 题目
 * 1. time：O(n!)
 * 2. 卡特兰数
 * 3. 左右的初始值都是 n
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function(n) {
  const res = [];
  if (n === 0) { return res; }
  helper(res, '', n, n);

  return res;

  function helper(res, string, left, right) {
    if (left > right) {
      return;
    }

    if (left === 0 && right === 0) {
      res.push(string);
      return;
    }

    if (left > 0) {
      helper(res, string + '(', left - 1, right);
    }

    if (right > 0) {
      helper(res, string + ')', left, right - 1);
    }
  }
};
