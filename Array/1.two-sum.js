/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 *
 * https://leetcode.com/problems/two-sum/description/
 *
 * algorithms
 * Easy (40.21%)
 * Total Accepted:    1.4M
 * Total Submissions: 3.5M
 * Testcase Example:  '[2,7,11,15]\n9'
 *
 * Given an array of integers, return indices of the two numbers such that they
 * add up to a specific target.
 * 
 * You may assume that each input would have exactly one solution, and you may
 * not use the same element twice.
 * 
 * Example:
 * 
 * 
 * Given nums = [2, 7, 11, 15], target = 9,
 * 
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 * 
 * 
 * 
 * 
 */
/**
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