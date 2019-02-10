/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * https://leetcode.com/problems/validate-binary-search-tree/submissions/
 * 
 * 验证是否是二叉树搜索树
 * 1. 如果 root 是 null，则是
 * 2. 如果左子树存在大于 node.val 则不是
 * 3. 如果右子树存在小于 node.val 则不是
 * 4. 递归
 * 
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