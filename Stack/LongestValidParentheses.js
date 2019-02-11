/**
 * https://leetcode.com/problems/longest-valid-parentheses/
 * 
 * 有效的最长括号
 * 
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