/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * https://leetcode.com/problems/invert-binary-tree/
 * 
 * 反转二叉树
 * 1. 边界条件判断
 * 2. 左右节点分别等于递归后的右左节点
 * 
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const invertTree = function (root) {
  // Edge
  if (!root) { return root; }
  
  if (root) {
    // swap、recusion
    const temp = root.left;
    root.left = invertTree(root.right);
    root.right = invertTree(temp);
    return root;
  }
};