/**
 * https://leetcode.com/problems/triangle/
 * 
 * 三角形最小路径和
   1. 定义状态 dp[i][j] : 从底部到 triangel[i][j] 的路径的最小值
   2.转移方程式: dp[i][j] = triangle[i][j] + Math.min(dp[i + 1][j], dp[i + 1][j + 1]);
   3.定义初始化的值: dp[rowMax][j] = triangle[rowMax][j]
 * 
 * @param {number[][]} triangle
 * @return {number}
 */
const minimumTotal = function (triangle) {
  if (triangle.length === 0 || triangle[0].length === 0) {
    return 0;
  }

  for (let i = triangle.length - 2; i >= 0; i--) {
    for (let j = triangle[i].length - 1; j >= 0; j--) {
      // DP 方程
      let min = Math.min(triangle[i + 1][j], triangle[i + 1][j + 1]);
      min += triangle[i][j];
      triangle[i][j] = min;
    }
  }

  return triangle[0][0];
};