/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 *
 * https://leetcode.com/problems/median-of-two-sorted-arrays/description/
 *
 * algorithms
 * Hard (25.32%)
 * Total Accepted:    374.4K
 * Total Submissions: 1.5M
 * Testcase Example:  '[1,3]\n[2]'
 *
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.
 * 
 * Find the median of the two sorted arrays. The overall run time complexity
 * should be O(log (m+n)).
 * 
 * You may assume nums1 and nums2 cannot be both empty.
 * 
 * Example 1:
 * 
 * 
 * nums1 = [1, 3]
 * nums2 = [2]
 * 
 * The median is 2.0
 * 
 * 
 * Example 2:
 * 
 * 
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 * 
 * The median is (2 + 3)/2 = 2.5
 * 
 * 
 */
/**
 * 寻找两个数组的中间数
 * 1. 主要考点是时间复杂度，不能使用排序
 * 2. 采用分治法，对两个数组分别求解
 * 3. 采用 curr 和 last 两个变量来记录状态
 * 4. 先把 curr 赋值给 last，再根据四个条件改变 curr
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function(nums1, nums2) {
  const totalLen = nums1.length + nums2.length;
  let index1 = 0;
  let index2 = 0;
  let curr;
  let last;

  while (index1 + index2 <= totalLen / 2) {
    if (curr) {
      last = curr;
    }

    const el1 = nums1[index1];
    const el2 = nums2[index2];

    if (el1 === undefined) {
      curr = el2;
      index2++;
      continue;
    }

    if (el2 === undefined) {
      curr = el1;
      index1++;
      continue;
    }

    if (el1 < el2) {
      curr = el1;
      index1++;
      continue;
    }

    curr = el2;
    index2++;
  }

  return totalLen % 2 === 0 ? (last + curr) / 2 : curr;
};

console.log(findMedianSortedArrays([1, 2], [3, 4]));
