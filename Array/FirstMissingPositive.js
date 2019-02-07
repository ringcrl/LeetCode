/**
 * https://leetcode.com/problems/first-missing-positive/
 * 
 * 1. O(n)的时间，所以一般的排序方法都不能用
 * 
 * @param {number[]} nums
 * @return {number}
 */
function firstMissingPositive (nums) {
  if (nums.length === 0) { return 1; }
  let flag = 1;
  while (nums.indexOf(flag) !== -1) {
    flag++;
  }

  return flag;
};

console.log(firstMissingPositive([7,8,9,11,12]));