/**
 * 求三数之和
 * https://leetcode.com/problems/3sum/
 * 
 * 1. 将数组转换成一个有序的数组，然后再去遍历数组，这样让我们能够跳过很多不必要的循环
 * 2. 遍历这排序后的数组，对数组剩余部分用双指针从两端向内收缩，
 *    遍历的时候我们需要注意的一点是，如果当前项和他的前一项相等，那么这一次循环其实是可以跳过的
 * 3. 因为数组是排序后的，所以我们可以保证[left_num, current_num, right_num]一定是从小到大的
 *    通过将数组转成一个字符串，我们将字符串记录在一个 hash 表中来达到去重的目的
 * 4. 当找到目标 left 和 right 的时候需要两端同时向内进行收缩
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
  if (nums.length < 3) {
    return [];
  }

  nums.sort((a, b) => { return (a - b) });

  const result = [];
  const result_hash = {};

  nums.forEach((num, index) => {
    if (
      index === 0 ||
      nums[index] !== nums[index - 1]
    ) {
      let left = index + 1;
      let right = nums.length - 1;
      while (left < right) {
        const num_res = num + nums[left] + nums[right];
        if (num_res === 0) {
          const hash_key = [num, nums[left], nums[right]].join('');
          if (!result_hash[hash_key]) {
            result.push([num, nums[left], nums[right]]);
            result_hash[hash_key] = true;
          }
          left++;
          right--;
          continue;
        }
        if (num_res < 0) {
          left++;
          continue;
        }
        right--;
      }
    }
  });

  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));