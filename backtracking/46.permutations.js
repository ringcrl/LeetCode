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
 * 数组的所有排序结果
 * 1. backtracking 题目一般要定义 helper 函数改 res
 * 2. helper 找到终止条件，推入的结果要做一次拷贝，防止后面被引用
 * 3. list 在 backtracking 前后 push 和 pop 内容，保证下一次循环为 []
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function(nums) {
  if (nums === null || nums.length === 0) { return nums; }

  const res = [];
  
  helper(res, []);

  return res;

  function helper(res, list) {
    // 找到终止条件
    if (list.length === nums.length) {
      res.push(list.slice());
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      // 不需要再加入自身
      if (list.includes(nums[i])) { continue; }
      list.push(nums[i]);
      helper(res, list);
      list.pop();
    }
  }
};
