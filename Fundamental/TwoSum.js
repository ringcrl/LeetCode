/**
 * https://leetcode.com/problems/two-sum/submissions/
 * 
 * 两数之和
 * 1. 方法一可以暴力求解，两两配对
 * 2. 方法二使用表结构，看当前值的匹配值是否在表中
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const dict = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (dict[target - num] !== undefined) {
      return [dict[target - num], i];
    } else {
      dict[num] = i;
    }
  }
  
  return false;
};