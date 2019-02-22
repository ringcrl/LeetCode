/*
 * @lc app=leetcode id=231 lang=javascript
 *
 * [231] Power of Two
 *
 * https://leetcode.com/problems/power-of-two/description/
 *
 * algorithms
 * Easy (41.57%)
 * Total Accepted:    211.7K
 * Total Submissions: 509.2K
 * Testcase Example:  '1'
 *
 * Given an integer, write a function to determine if it is a power of two.
 * 
 * Example 1:
 * 
 * 
 * Input: 1
 * Output: true 
 * Explanation: 20 = 1
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 16
 * Output: true
 * Explanation: 24 = 16
 * 
 * Example 3:
 * 
 * 
 * Input: 218
 * Output: false
 * 
 */
/**
 * 判断一个数是不是 2 的幂次方
 * 1. 如果这个数是 1，为 true
 * 2. 如果这个数 >= 2 并且是偶数，递归
 * 3. 否则为 false
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo = function (n) {
  if (n == 1) {
    return true;
  }
  if (n >= 2 && n % 2 == 0) {
    return isPowerOfTwo(n / 2);
  }
    
  return false;
};
