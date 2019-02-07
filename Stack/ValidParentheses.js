/**
 * https://leetcode.com/problems/valid-parentheses/
 * 
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

console.log(isValid('(])'));