/*
 * @lc app=leetcode id=43 lang=javascript
 *
 * [43] Multiply Strings
 *
 * https://leetcode.com/problems/multiply-strings/description/
 *
 * algorithms
 * Medium (29.84%)
 * Total Accepted:    181.8K
 * Total Submissions: 608.9K
 * Testcase Example:  '"2"\n"3"'
 *
 * Given two non-negative integers num1 and num2 represented as strings, return
 * the product of num1 and num2, also represented as a string.
 * 
 * Example 1:
 * 
 * 
 * Input: num1 = "2", num2 = "3"
 * Output: "6"
 * 
 * Example 2:
 * 
 * 
 * Input: num1 = "123", num2 = "456"
 * Output: "56088"
 * 
 * 
 * Note:
 * 
 * 
 * The length of both num1 and num2 is < 110.
 * Both num1 and num2 contain only digits 0-9.
 * Both num1 and num2 do not contain any leading zero, except the number 0
 * itself.
 * You must not use any built-in BigInteger library or convert the inputs to
 * integer directly.
 * 
 * 
 */
/**
 * 两个字符串相乘
 * 1. 不允许直接乘，直接乘也会超出 JS 17 位的精度，后面显示 0
 * 2. 采用原始的纸写乘法的方法
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const multiply = function (num1, num2) {
  if (num1 == 0 || num2 == 0) {
    return '0';
  }
  const sum = [];
  for (let i = 0; i < num1.length; i++) {
    for (let j = 0; j < num2.length; j++) {
      if (sum[i + j] == undefined) {
        sum[i + j] = num1[i] * num2[j];
      } else {
        sum[i + j] += num1[i] * num2[j];
      }
    }
  }

  sum.reverse();
  for (let i = 0; i < sum.length; i++) {
    if (sum[i] > 9) {
      if (sum[i + 1] == undefined) {
        sum[i + 1] = Math.floor(sum[i] / 10);
      } else {
        sum[i + 1] += Math.floor(sum[i] / 10);
      }
      sum[i] = sum[i] % 10;
    }
  }
  return sum.reverse().join('');
};