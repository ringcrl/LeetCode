/*
 * @lc app=leetcode id=78 lang=javascript
 *
 * [78] Subsets
 *
 * https://leetcode.com/problems/subsets/description/
 *
 * algorithms
 * Medium (50.65%)
 * Total Accepted:    325.9K
 * Total Submissions: 643.1K
 * Testcase Example:  '[1,2,3]'
 *
 * Given a set of distinct integers, nums, return all possible subsets (the
 * power set).
 * 
 * Note: The solution set must not contain duplicate subsets.
 * 
 * Example:
 * 
 * 
 * Input: nums = [1,2,3]
 * Output:
 * [
 * ⁠ [3],
 * [1],
 * [2],
 * [1,2,3],
 * [1,3],
 * [2,3],
 * [1,2],
 * []
 * ]
 * 
 */
/**
 * 数组的所有子集，包括自身和 []
 * 1. 定义 helper，需要长度、index he list
 * 2. list 的长度为需要的长度的时候，推入结果，注意 slice 一份
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = function(nums) {
  const res = [nums];
  for (let i = 0; i < nums.length; i++) {
    helper(i, 0, []);
  }
  
  return res;

  function helper(length, index, list) {
    if (list.length === length) {
      res.push(list.slice());
      return;
    }

    for (let i = index; i < nums.length; i++) {
      list.push(nums[i]);
      helper(length, i + 1, list);
      list.pop();
    }
  }
};

console.log(subsets([1,2,3]));
