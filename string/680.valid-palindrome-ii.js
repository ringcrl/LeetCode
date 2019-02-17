/*
 * @lc app=leetcode id=680 lang=javascript
 *
 * [680] Valid Palindrome II
 *
 * https://leetcode.com/problems/valid-palindrome-ii/description/
 *
 * algorithms
 * Easy (33.62%)
 * Total Accepted:    60.7K
 * Total Submissions: 180.6K
 * Testcase Example:  '"aba"'
 *
 * 
 * Given a non-empty string s, you may delete at most one character.  Judge
 * whether you can make it a palindrome.
 * 
 * 
 * Example 1:
 * 
 * Input: "aba"
 * Output: True
 * 
 * 
 * 
 * Example 2:
 * 
 * Input: "abca"
 * Output: True
 * Explanation: You could delete the character 'c'.
 * 
 * 
 * 
 * Note:
 * 
 * The string will only contain lowercase characters a-z.
 * The maximum length of the string is 50000.
 * 
 * 
 */
/**
 * 1. 多使用 -- 或 ++ 符号减少代码行数
 * 2. 在第一层回文判断失败后进行删减后的判断
 * @param {string} s
 * @return {boolean}
 */
const validPalindrome = function(s) {
  let l = -1;
  let r = s.length;
  while (++l < --r) {
    if (s[l] !== s[r]) {
      return isPalindrome(s, l + 1, r) || isPalindrome(s, l, r - 1);
    }
  }

  return true;
};

function isPalindrome(s, l, r) {
  while (l < r) {
    if (s[l++] !== s[r--]) {
      return false;
    }
  }

  return true;
}
