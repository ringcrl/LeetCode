/**
 * https://leetcode.com/problems/sqrtx/
 * 
 * x 的平方根
 * 1. 使用二分查找法实现.
 * 2. 范围是 1 ~ x/2
 * 
 * @param {number} x
 * @return {number}
 */
function mySqrt(x) {
  if (x === 0 || x === 1) { return x; };

  let start = 1;
  let end = Math.floor(x / 2);

  while (start <= end) {
    const mid = Math.floor((end - start) / 2 + start);
    const v1 = mid ** 2;
    const v2 = (mid + 1) ** 2;
    if (v1 === x || (v1 < x && v2 > x)) { return mid; }

    if (v1 < x) {
      start = mid + 1;
    } else if (v1 > x) {
      end = mid - 1;
    }
  }

  return null;
}