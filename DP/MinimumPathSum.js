/**
 * https://leetcode.com/problems/minimum-path-sum/
 * 
 * 最小路径和
 * 1. dp[x][y] = dp[x-1][y] 或 dp[x][y-1] 的最小值 + grid[x][y]
 * 2. 注意二维数组要干净，避免引用类型导致的引用修改
 * 
 * @param {number[][]} grid
 * @return {number}
 */
const minPathSum = function(grid) {
  // Edge
  if (!grid) { return; }

  const row = grid.length;
  const col = grid[0].length;

  // 创建 DP 矩阵，注意创新二维数组要防止引用类型
  const dp = Array(row)
    .fill(0)
    .map(() => Array(col).fill(0));
  dp[0][0] = grid[0][0];
  console.log('dp 初始化', JSON.stringify(dp));

  // 填充第一行
  for (let i = 1; i < col; i++) {
    dp[0][i] = dp[0][i - 1] + grid[0][i];
  }
  console.log('填充第一行', JSON.stringify(dp));

  // 填充第一列
  for (let i = 1; i < row; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }
  console.log('填充第一列', JSON.stringify(dp));

  // 使用 DP 方程进行递推
  for(let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
    }
  }
  console.log('dp 结束', JSON.stringify(dp));
  return dp[row - 1][col - 1];
};

minPathSum([[1,3,1],[1,5,1],[4,2,1]]);