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
 * 1. 从小到大排序数组
 * 2. for 循环拿个定值
 * 3. 剩下的数字两端逼近
 * 4. 处理 total === 0：result 加一组结果，继续两端收缩到不同的值
 * 5. 处理 total < 0，left++
 * 6. 处理 total > 0，right--
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
  if (nums.length < 3) {
    return [];
  }

  nums.sort((a, b) => { return (a - b); });

  const result = [];
  for (let i = 0; i < nums.length - 2; i++) {
    const num = nums[i];
    
    // 重复的定值不需要
    if (num === nums[i - 1]) { continue; }

    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const total = num + nums[left] + nums[right];
      if (total === 0) {
        result.push([num, nums[left], nums[right]]);
        let newLeft = left + 1;
        while (nums[left] === nums[newLeft]) {
          newLeft++;
        }
        left = newLeft;
        let newRight = right - 1;
        while (nums[right] === nums[newRight]) {
          newRight--;
        }
        right = newRight;
        continue;
      }

      if (total < 0) {
        left++;
        continue;
      }

      if (total > 0) {
        right--;
        continue;
      }
    }
  }

  return result;
}