/**
 * https://leetcode.com/problems/majority-element/
 * 
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

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));