/**
 * https://leetcode.com/problems/climbing-stairs/
 * 
 * @param {number} n
 * @return {number}
 */
const map = new Map();
function climbStairs(n) {
  if (n <= 2) return n;
  if (map.has(n)) return map.get(n);
  const stairs = climbStairs(n - 1) + climbStairs(n - 2);
  map.set(n, stairs);
  return stairs;
}