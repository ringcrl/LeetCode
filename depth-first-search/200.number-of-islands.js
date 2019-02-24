/*
 * @lc app=leetcode id=200 lang=javascript
 *
 * [200] Number of Islands
 *
 * https://leetcode.com/problems/number-of-islands/description/
 *
 * algorithms
 * Medium (39.96%)
 * Total Accepted:    292.4K
 * Total Submissions: 731.5K
 * Testcase Example:  '[["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]'
 *
 * Given a 2d grid map of '1's (land) and '0's (water), count the number of
 * islands. An island is surrounded by water and is formed by connecting
 * adjacent lands horizontally or vertically. You may assume all four edges of
 * the grid are all surrounded by water.
 * 
 * Example 1:
 * 
 * 
 * Input:
 * 11110
 * 11010
 * 11000
 * 00000
 * 
 * Output: 1
 * 
 * 
 * Example 2:
 * 
 * 
 * Input:
 * 11000
 * 11000
 * 00100
 * 00011
 * 
 * Output: 3
 * 
 */
/**
 * 岛屿的数量
 * 1. 二维数组遍历
 * 2. 找到岛屿后进行深度优先搜索
 * 3. 把深度的结果变成 0，表示已经搜索过了
 * 4. 返回累加值
 * 
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = function(grid) {
  const m = grid.length;
  if (m === 0) { return 0; }
  const n = grid[0].length;
  let res = 0;
  
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '1') {
        dfs(grid, i, j);
        res++;
      }
    }
  }
  
  function dfs(grid, i, j) {
    if (i < 0 || j < 0 || i >= m || j >= n || grid[i][j] === '0') { return; }
    grid[i][j] = '0';
    dfs(grid, i, j + 1);
    dfs(grid, i, j - 1);
    dfs(grid, i + 1, j);
    dfs(grid, i - 1, j);
  }
  
  return res;
};