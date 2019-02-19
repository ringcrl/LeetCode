/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 *
 * https://leetcode.com/problems/contains-duplicate/description/
 *
 * algorithms
 * Easy (50.62%)
 * Total Accepted:    298.5K
 * Total Submissions: 589.6K
 * Testcase Example:  '[1,2,3,1]'
 *
 * Given an array of integers, find if the array contains any duplicates.
 * 
 * Your function should return true if any value appears at least twice in the
 * array, and it should return false if every element is distinct.
 * 
 * Example 1:
 * 
 * 
 * Input: [1,2,3,1]
 * Output: true
 * 
 * Example 2:
 * 
 * 
 * Input: [1,2,3,4]
 * Output: false
 * 
 * Example 3:
 * 
 * 
 * Input: [1,1,1,3,3,4,3,2,4,2]
 * Output: true
 * 
 */
/**
 * 存在重复元素
 * - hash 表使用
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function(nums) {
  const hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (!hash[nums[i]]) {
      hash[nums[i]] = 1;
      continue;
    } else {
      return true;
    }
  }
  return false;
};
