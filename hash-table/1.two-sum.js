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
 * 数组中两数之和为 target
 * 1. 一次循环
 * 2. 如果 target - nums[i] 为 undefined，则记录结果到 hash
 * 3. 如果找到对应的值，则返回两个值的索引
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const hash = {};

  for (let i = 0; i < nums.length; i++) {
    if (hash[target - nums[i]] === undefined) {
      hash[nums[i]] = i;
    } else {
      return [hash[target - nums[i]], i];      
    }
  }
  
  return false;
};