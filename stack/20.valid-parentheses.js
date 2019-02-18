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
 * 有效的括号
 * 1. 处理 0、1 的边界条件
 * 2. 定义反向的 map
 * 3. 如果是正向的括号，推入
 * 4. 如果是反向的括号，看栈顶元素是否匹配，匹配推出，不匹配推入
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
  if (s === '') { return true; }

  if (s.length === 1) { return false; }

  const arr = s.split('');

  const stack = [];
  const pairMap = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  for (let i = 0; i < arr.length; i++) {
    const curr = arr[i];
    if (!pairMap[curr]) {
      stack.push(curr);
      continue;
    }

    if (pairMap[curr] === stack[stack.length - 1]) {
      stack.pop();
    } else { // 如果当前元素和最后一个元素不匹配，继续推
      stack.push(curr);
    }
  }

  if (stack.length !== 0) {
    return false;
  }

  return true;
}