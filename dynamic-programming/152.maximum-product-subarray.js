/*
 * @lc app=leetcode id=152 lang=javascript
 *
 * [152] Maximum Product Subarray
 *
 * https://leetcode.com/problems/maximum-product-subarray/description/
 *
 * algorithms
 * Medium (28.40%)
 * Total Accepted:    186.3K
 * Total Submissions: 655.8K
 * Testcase Example:  '[2,3,-2,4]'
 *
 * Given an integer array nums, find the contiguous subarray within an array
 * (containing at least one number) which has the largest product.
 * 
 * Example 1:
 * 
 * 
 * Input: [2,3,-2,4]
 * Output: 6
 * Explanation: [2,3] has the largest product 6.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [-2,0,-1]
 * Output: 0
 * Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
 * 
 */
/**
 * 乘积最大子序列
 * 1. 一次循环，找出最小值最大值
 * 2. 同时更新 min 和 max
 * 
 * @param {number[]} nums
 * @return {number}
 */
function maxProduct(nums) {
  let res = -Number.MAX_VALUE;
  let min = 1;
  let max = 1;
  for (const num of nums) {
    [min, max] = [
      Math.min(num, min * num, max * num),
      Math.max(num, min * num, max * num),
    ];
    res = Math.max(res, max);
  }
  return res;
}