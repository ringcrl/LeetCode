/*
 * @lc app=leetcode id=215 lang=javascript
 *
 * [215] Kth Largest Element in an Array
 *
 * https://leetcode.com/problems/kth-largest-element-in-an-array/description/
 *
 * algorithms
 * Medium (45.51%)
 * Total Accepted:    316.2K
 * Total Submissions: 693.8K
 * Testcase Example:  '[3,2,1,5,6,4]\n2'
 *
 * Find the kth largest element in an unsorted array. Note that it is the kth
 * largest element in the sorted order, not the kth distinct element.
 * 
 * Example 1:
 * 
 * 
 * Input: [3,2,1,5,6,4] and k = 2
 * Output: 5
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [3,2,3,1,2,4,5,5,6] and k = 4
 * Output: 4
 * 
 * Note: 
 * You may assume k is always valid, 1 ≤ k ≤ array's length.
 * 
 */
/**
 * 时间复杂度 O(NlogN)，空间复杂度 O(1)
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = function (nums, k, start = 0, end = nums.length - 1) {
  const pivot = nums[start + Math.floor((end - start) / 2)];
  let l = start;
  let r = end;
  // move values >= pivot to the left, values <= pivot to the right
  while (l <= r) {
    while (l <= r && nums[l] > pivot) l++;
    while (l <= r && nums[r] < pivot) r--;
    if (l <= r) {
      const temp = nums[l];
      nums[l] = nums[r];
      nums[r] = temp;
      l++;
      r--;
    }
  }

  // check if kth largest element is in the left part
  if (start + k - 1 <= r) return findKthLargest(nums, k, start, r);
  // otherwise, check if kth largest element is in the right part
  if (start + k - 1 >= l) return findKthLargest(nums, k - l + start, l, end);
  return nums[r + 1];
};