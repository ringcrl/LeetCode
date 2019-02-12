/*
 * @lc app=leetcode id=239 lang=javascript
 *
 * [239] Sliding Window Maximum
 *
 * https://leetcode.com/problems/sliding-window-maximum/description/
 *
 * algorithms
 * Hard (36.82%)
 * Total Accepted:    133.9K
 * Total Submissions: 363.5K
 * Testcase Example:  '[1,3,-1,-3,5,3,6,7]\n3'
 *
 * Given an array nums, there is a sliding window of size k which is moving
 * from the very left of the array to the very right. You can only see the k
 * numbers in the window. Each time the sliding window moves right by one
 * position. Return the max sliding window.
 * 
 * Example:
 * 
 * 
 * Input: nums = [1,3,-1,-3,5,3,6,7], and k = 3
 * Output: [3,3,5,5,6,7] 
 * Explanation: 
 * 
 * Window position                Max
 * ---------------               -----
 * [1  3  -1] -3  5  3  6  7       3
 * ⁠1 [3  -1  -3] 5  3  6  7       3
 * ⁠1  3 [-1  -3  5] 3  6  7       5
 * ⁠1  3  -1 [-3  5  3] 6  7       5
 * ⁠1  3  -1  -3 [5  3  6] 7       6
 * ⁠1  3  -1  -3  5 [3  6  7]      7
 * 
 * 
 * Note: 
 * You may assume k is always valid, 1 ≤ k ≤ input array's size for non-empty
 * array.
 * 
 * Follow up:
 * Could you solve it in linear time?
 * 
 */
/**
 * https://leetcode.com/problems/sliding-window-maximum/
 * 
 * 滑动窗口最大值
 * 1. 使用 Monotonic queue，time O(n)，space O(k)
 * 2. 来了个队列最大值就把队列清空
 * 3. Monotonic queue 的结果就是最后结果
 * 
 * https://www.youtube.com/watch?v=2SXqBsTR6a8
 * Monotonic queue   max
 *  [ 1 ]              -
 *  [ 3 ]              -
 *  [ 3, -1 ]          3
 *  [ 3, -1, -3 ]      3
 *  [ 5 ]              5
 *  [ 5, 3 ]           5
 *  [ 6 ]              6
 *  [ 7 ]              7
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function maxSlidingWindow(nums, k) {
  const res = [];
  const mq = [];

  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    while (mq.length && curr > mq[mq.length - 1]) {
      mq.pop();
    }

    mq.push(curr);

    const startIndex = i - k + 1;

    if (startIndex < 0) { continue; }

    res.push(mq[0]);

    if (nums[startIndex] === mq[0]) {
      mq.shift(); // 确保没有重复
    }
  }

  return res;
}