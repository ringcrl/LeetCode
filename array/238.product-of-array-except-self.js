/*
 * @lc app=leetcode id=238 lang=javascript
 *
 * [238] Product of Array Except Self
 *
 * https://leetcode.com/problems/product-of-array-except-self/description/
 *
 * algorithms
 * Medium (53.64%)
 * Total Accepted:    222K
 * Total Submissions: 413.7K
 * Testcase Example:  '[1,2,3,4]'
 *
 * Given an array nums of n integers where n > 1,  return an array output such
 * that output[i] is equal to the product of all the elements of nums except
 * nums[i].
 * 
 * Example:
 * 
 * 
 * Input:  [1,2,3,4]
 * Output: [24,12,8,6]
 * 
 * 
 * Note: Please solve it without division and in O(n).
 * 
 * Follow up:
 * Could you solve it with constant space complexity? (The output array does
 * not count as extra space for the purpose of space complexity analysis.)
 * 
 */
/**
 * 除自身以外数组的乘积
 * 1. 从右边往左边找到该数右边的乘积
 * 2. 从左边往右边找到左边的乘积
 * @param {number[]} nums
 * @return {number[]}
 */

const productExceptSelf = function (nums) {
  const res = [];
  let leftMult = 1;
  let rightMult = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] = rightMult;
    rightMult *= nums[i];
  }
  console.log(JSON.stringify(res));
  for (let j = 0; j < nums.length; j++) {
    res[j] *= leftMult;
    leftMult *= nums[j];
  }
  console.log(JSON.stringify(res));
  return res;
};
productExceptSelf([1,2,3,4]);