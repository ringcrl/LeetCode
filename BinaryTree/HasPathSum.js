/**
 * https://leetcode.com/problems/path-sum/submissions/
 * 
 * 二叉树是否有和为 sum 的 path
 * 1. 判空
 * 2. 找到叶子节点，看叶子节点的值是否为 newSum
 * 3. sum - root.val 为 newSum
 * 4. 寻找左子树或者右子树
 * 
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
const hasPathSum = function(root, sum) {
  if (root === null) { return false; }
  
  // 叶子节点
  if (root.left === null && root.right === null) {
    return root.val === sum;
  }
  
  const newSum = sum - root.val;
  
  return hasPathSum(root.left, newSum) || hasPathSum(root.right, newSum);
};