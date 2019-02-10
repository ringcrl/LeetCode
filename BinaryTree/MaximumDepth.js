/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/
 * 
 * 求二叉树最大深度
 * 1. 判断边界条件
 * 2. 左子树的最大高度或右子树的最大高度 + 1
 * 
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = function (root) {
  if (root == null) { return 0; }

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
