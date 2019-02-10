/**
 * https://leetcode.com/problems/number-of-islands/
 * 
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