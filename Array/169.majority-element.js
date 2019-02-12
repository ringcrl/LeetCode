/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 *
 * https://leetcode.com/problems/majority-element/description/
 *
 * algorithms
 * Easy (51.22%)
 * Total Accepted:    341.7K
 * Total Submissions: 667K
 * Testcase Example:  '[3,2,3]'
 *
 * Given an array of size n, find the majority element. The majority element is
 * the element that appears more than ⌊ n/2 ⌋ times.
 * 
 * You may assume that the array is non-empty and the majority element always
 * exist in the array.
 * 
 * Example 1:
 * 
 * 
 * Input: [3,2,3]
 * Output: 3
 * 
 * Example 2:
 * 
 * 
 * Input: [2,2,1,1,1,2,2]
 * Output: 2
 * 
 * 
 */
/**
 * 求出现频率大于一半的众数
 * 1. 用 map 记录每个数字出现的次数
 * 2. 当计数器大于一半的时候返回此值
 * 
 * @param {number[]} nums
 * @return {number}
 */
function majorityElement(nums) {
  const list = [];
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (list[num] === undefined) {
      list[num] = 1;
    } else {
      list[num]++;
    }
    if (list[num] > nums.length / 2) {
      return num;
    }
  }
  return null;
}