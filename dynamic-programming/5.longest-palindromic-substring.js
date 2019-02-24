/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 *
 * https://leetcode.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (26.33%)
 * Total Accepted:    467.6K
 * Total Submissions: 1.8M
 * Testcase Example:  '"babad"'
 *
 * Given a string s, find the longest palindromic substring in s. You may
 * assume that the maximum length of s is 1000.
 * 
 * Example 1:
 * 
 * 
 * Input: "babad"
 * Output: "bab"
 * Note: "aba" is also a valid answer.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "cbbd"
 * Output: "bb"
 * 
 * 
 */
/**
 * b a b a d
 *         d // i = 4 
 * b // j = 0
 * 
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function(s) {
  if (s === null || s.length === 0) { return s; }
  const len = s.length;
  let res = '';
  let max = 0;
  const dp = Array(len)
    .fill(0)
    .map(() => Array(len).fill(0));
  for (let i = 0; i < len; i++) {
    for (let j = 0; j <= i; j++) {
      dp[j][i] = s[j] === s[i] &&
        ((i - j <= 2) || dp[j + 1][i - 1]);
      if (dp[j][i]) {
        if (i - j + 1 > max) {
          max = i - j + 1;
          res = s.slice(j, i + 1);
        }
      }
    }
  }

  return res;
};