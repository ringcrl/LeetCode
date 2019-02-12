/*
 * @lc app=leetcode id=41 lang=javascript
 *
 * [41] First Missing Positive
 *
 * https://leetcode.com/problems/first-missing-positive/description/
 *
 * algorithms
 * Hard (28.05%)
 * Total Accepted:    187.1K
 * Total Submissions: 666.8K
 * Testcase Example:  '[1,2,0]'
 *
 * Given an unsorted integer array, find the smallest missing positive
 * integer.
 * 
 * Example 1:
 * 
 * 
 * Input: [1,2,0]
 * Output: 3
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [3,4,-1,1]
 * Output: 2
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: [7,8,9,11,12]
 * Output: 1
 * 
 * 
 * Note:
 * 
 * Your algorithm should run in O(n) time and uses constant extra space.
 * 
 */
/**
 * 求缺失的第一个正数
 * 1. O(n)的时间，所以一般的排序方法都不能用
 * 2. 遍历找到第一个不存在的值
 * 
 * @param {number[]} nums
 * @return {number}
 */
function firstMissingPositive (nums) {
  if (nums.length === 0) { return 1; }

  let flag = 1;
  while (nums.indexOf(flag) !== -1) {
    flag++;
  }

  return flag;
}