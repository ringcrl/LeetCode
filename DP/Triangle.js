/**
 * https://leetcode.com/problems/triangle/
 * 
 * 三角形最小路径和
   1. 定义状态 dp[i][j] : 从底部到 triangel[i][j] 的路径的最小值
   2. 转移方程式（左下的点与右下的点的最小值加上自身的值）: dp[i][j] = triangle[i][j] + Math.min(dp[i + 1][j], dp[i + 1][j + 1]);
   3. 定义 dp 初始值: dp[rowMax][j] = triangle[rowMax][j]
   4. 往上递推，最后推到 dp[0][0] 就是答案
   5. 时间复杂度O(row x col)
 * 
 * @param {number[][]} triangle
 * @return {number}
 */
const minimumTotal = function (triangle) {
  // Edge
  if (triangle.length === 0 || triangle[0].length === 0) {
    return 0;
  }

  // 从倒数第二行开始到第 0 行
  for (let i = triangle.length - 2; i >= 0; i--) {
    // 从行的最后一个数到第 0 个数
    for (let j = triangle[i].length - 1; j >= 0; j--) {
      // DP 方程，这里做了处理，整行取了最小
      let min = Math.min(
        triangle[i + 1][j],
        triangle[i + 1][j + 1],
      );
      min += triangle[i][j];
      triangle[i][j] = min;
    }
  }

  return triangle[0][0];
};