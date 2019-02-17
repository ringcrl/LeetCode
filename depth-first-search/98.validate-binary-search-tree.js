/*
 * @lc app=leetcode id=98 lang=javascript
 *
 * [98] Validate Binary Search Tree
 *
 * https://leetcode.com/problems/validate-binary-search-tree/description/
 *
 * algorithms
 * Medium (25.14%)
 * Total Accepted:    349K
 * Total Submissions: 1.4M
 * Testcase Example:  '[2,1,3]'
 *
 * Given a binary tree, determine if it is a valid binary search tree (BST).
 * 
 * Assume a BST is defined as follows:
 * 
 * 
 * The left subtree of a node contains only nodes with keys less than the
 * node's key.
 * The right subtree of a node contains only nodes with keys greater than the
 * node's key.
 * Both the left and right subtrees must also be binary search trees.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input:
 * ⁠   2
 * ⁠  / \
 * ⁠ 1   3
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * ⁠   5
 * ⁠  / \
 * ⁠ 1   4
 * / \
 * 3   6
 * Output: false
 * Explanation: The input is: [5,1,4,null,null,3,6]. The root node's
 * value
 * is 5 but its right child's value is 4.
 * 
 * 
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 验证是否是二叉树搜索树
 * 1. 如果 root 是 null，则是
 * 2. 如果左子树存在大于 node.val 则不是
 * 3. 如果右子树存在小于 node.val 则不是
 * 4. 递归
 * @param {TreeNode} root
 * @return {boolean}
 */
const isValidBST = function (root) {
  const isValid = (node, min = null, max = null) => {
    if (!node) { return true; }
    if (min !== null && node.val <= min) { return false; }
    if (max !== null && node.val >= max) { return false; }

    return isValid(node.left, min, node.val) && isValid(node.right, node.val, max);

  };
  return isValid(root);
};