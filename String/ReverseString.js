/**
 * https://leetcode.com/problems/reverse-string/
 * 
 * 反转字符串
 * 1. 设定首尾指针 start，end
 * 2. 不断交换首尾元素，start++，end--
 * 
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
function reverseString(s) {
  const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  };

  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    swap(s, start, end);
    start++;
    end--;
  }

  return s;
}