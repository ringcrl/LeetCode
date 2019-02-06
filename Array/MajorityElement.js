/**
 * 求出现频率大于一半的众数
 * https://leetcode.com/problems/majority-element/
 * 
 * @param {number[]} nums
 * @return {number}
 */
function majorityElement(nums) {
  const list = [];
  for (let i = 0; i < nums.length; i++) {
    if (!list[nums[i]]) {
      list[nums[i]] = 1;
    }
    else {
      list[nums[i]]++;
    }
    if (list[nums[i]] > nums.length / 2) {
      return nums[i];
    }
  }
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));