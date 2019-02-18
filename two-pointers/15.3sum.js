/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 *
 * https://leetcode.com/problems/3sum/description/
 *
 * algorithms
 * Medium (23.15%)
 * Total Accepted:    470.2K
 * Total Submissions: 2M
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * Given an array nums of n integers, are there elements a, b, c in nums such
 * that a + b + c = 0? Find all unique triplets in the array which gives the
 * sum of zero.
 * 
 * Note:
 * 
 * The solution set must not contain duplicate triplets.
 * 
 * Example:
 * 
 * 
 * Given array nums = [-1, 0, 1, 2, -1, -4],
 * 
 * A solution set is:
 * [
 * ⁠ [-1, 0, 1],
 * ⁠ [-1, -1, 2]
 * ]
 * 
 * 
 */
/**
 * 求三数之和
 * 1. 边界处理
 * 2. 记得排序数组
 * 3. for 循环：如果 curr 大于 0 直接返回 res，当前数与前一个数相等的时候不处理
 * 4. 定义内层 for 循环，j、k 两段逼近
 * 5. total 为 0 的时候处理
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
  const res = [];

  if (nums.length < 3) { return res; }

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    // 如果最小值都大于 0，直接返回 []
    // 下面的循环已经做了判断，外层循环不用处理大于 0 的情况
    if (nums[i] > 0) { return res; }

    // 当后一个数与前一个数相等的时候，不处理
    if (i > 0 && nums[i] === nums[i - 1]) { continue; }

    // 多使用这种 for 循环解决问题
    for (let j = i + 1, k = nums.length - 1; j < k;) {
      const total = nums[i] + nums[j] + nums[k];
      // 关键处理 total 为 0 的情况，跳过重复值
      if (total === 0) {
        res.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;
        while (j < k && nums[j] === nums[j - 1]) {
          j++;
        }
        while (j < k && nums[k] === nums[k + 1]) {
          k--;
        }
        continue;
      }

      if (total > 0) {
        k--;
        continue;
      }

      if (total < 0) {
        j++;
      }
    }
  }

  return res;
}