/*
 * @lc app=leetcode id=112 lang=javascript
 *
 * [112] Path Sum
 *
 * https://leetcode.com/problems/path-sum/description/
 *
 * algorithms
 * Easy (36.85%)
 * Total Accepted:    280.6K
 * Total Submissions: 761.3K
 * Testcase Example:  '[5,4,8,11,null,13,4,7,2,null,null,null,1]\n22'
 *
 * Given a binary tree and a sum, determine if the tree has a root-to-leaf path
 * such that adding up all the values along the path equals the given sum.
 * 
 * Note: A leaf is a node with no children.
 * 
 * Example:
 * 
 * Given the below binary tree and sum = 22,
 * 
 * 
 * ⁠     5
 * ⁠    / \
 * ⁠   4   8
 * ⁠  /   / \
 * ⁠ 11  13  4
 * ⁠/  \      \
 * 7    2      1
 * 
 * 
 * return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.
 * 
 */
/**
 * 二叉树是否有和为 sum 的 path
 * 1. 判空
 * 2. 找到叶子节点，看叶子节点的值是否为 newSum
 * 3. sum - root.val 为 newSum
 * 4. 寻找左子树或者右子树
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