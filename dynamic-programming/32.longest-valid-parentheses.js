/*
 * @lc app=leetcode id=32 lang=javascript
 *
 * [32] Longest Valid Parentheses
 *
 * https://leetcode.com/problems/longest-valid-parentheses/description/
 *
 * algorithms
 * Hard (24.77%)
 * Total Accepted:    169.5K
 * Total Submissions: 684K
 * Testcase Example:  '"(()"'
 *
 * Given a string containing just the characters '(' and ')', find the length
 * of the longest valid (well-formed) parentheses substring.
 * 
 * Example 1:
 * 
 * 
 * Input: "(()"
 * Output: 2
 * Explanation: The longest valid parentheses substring is "()"
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: ")()())"
 * Output: 4
 * Explanation: The longest valid parentheses substring is "()()"
 * 
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
function longestValidParentheses(s) {
  const ts = s.split('');
  const stack = [];
  let max = 0;

  ts.forEach(function (t, i) {
    if (t == '(') {
      stack.push(i);
    } else {
      if (stack.length === 0 || ts[stack[stack.length - 1]] == ')') {
        stack.push(i);
      } else {
        stack.pop();
      }
    }
  });

  // add two ends                                                                      
  stack.push(ts.length);
  stack.splice(0, 0, -1);

  for (let i = 0; i < stack.length - 1; i++) {
    const v = stack[i + 1] - stack[i] - 1;
    max = Math.max(max, v);
  }

  return max;
}