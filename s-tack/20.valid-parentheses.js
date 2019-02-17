/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 *
 * https://leetcode.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (35.73%)
 * Total Accepted:    502.8K
 * Total Submissions: 1.4M
 * Testcase Example:  '"()"'
 *
 * Given a string containing just the characters '(', ')', '{', '}', '[' and
 * ']', determine if the input string is valid.
 * 
 * An input string is valid if:
 * 
 * 
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * 
 * 
 * Note that an empty string is also considered valid.
 * 
 * Example 1:
 * 
 * 
 * Input: "()"
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "()[]{}"
 * Output: true
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: "(]"
 * Output: false
 * 
 * 
 * Example 4:
 * 
 * 
 * Input: "([)]"
 * Output: false
 * 
 * 
 * Example 5:
 * 
 * 
 * Input: "{[]}"
 * Output: true
 * 
 * 
 */
/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
  const arr = s.split('');

  if (arr.length === 1) {
    return false;
  }

  const stack = [];
  const pairMap = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  arr.forEach(item => {
    if (
      !pairMap[item] ||
      stack[stack.length - 1] !== pairMap[item]
    ) {
      stack.push(item);
      return;
    }

    if (stack[stack.length - 1] === pairMap[item]) {
      stack.pop();
    }
  });

  if (stack.length === 0) {
    return true;
  }

  return false;
}