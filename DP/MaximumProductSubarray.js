/**
 * https://leetcode.com/problems/maximum-product-subarray/
 * 
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