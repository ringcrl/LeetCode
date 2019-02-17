/*
 * @lc app=leetcode id=46 lang=javascript
 *
 * [46] Permutations
 *
 * https://leetcode.com/problems/permutations/description/
 *
 * algorithms
 * Medium (52.96%)
 * Total Accepted:    333.8K
 * Total Submissions: 629.1K
 * Testcase Example:  '[1,2,3]'
 *
 * Given a collection of distinct integers, return all possible permutations.
 * 
 * Example:
 * 
 * 
 * Input: [1,2,3]
 * Output:
 * [
 * ⁠ [1,2,3],
 * ⁠ [1,3,2],
 * ⁠ [2,1,3],
 * ⁠ [2,3,1],
 * ⁠ [3,1,2],
 * ⁠ [3,2,1]
 * ]
 * 
 * 
 */
/**
 * backtracking 类型的题目
 * 1. 要注意递归前后的状态
 * 2. 找到终止条件
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function(nums) {
  const res = [];
  if (nums === null || nums.length === 0) { return res; }

  helper(res, []);

  return res;

  function helper(res, list) {
    // base cast
    if (list.length === nums.length) {
      res.push(list.slice());
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (list.includes(nums[i])) { continue; }
      list.push(nums[i]);
      helper(res, list);
      list.pop();
    }
  }
};
