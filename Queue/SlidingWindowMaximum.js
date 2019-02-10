/**
 * https://leetcode.com/problems/sliding-window-maximum/
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
 * 1. 使用 Monotonic queue，time O(n)，space O(k)
 * 2. 来了个队列最大值就把队列清空
 * 3. Monotonic queue 的结果就是最后结果
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