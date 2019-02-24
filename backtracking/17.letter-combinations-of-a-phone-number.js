/*
 * @lc app=leetcode id=17 lang=javascript
 *
 * [17] Letter Combinations of a Phone Number
 *
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/
 *
 * algorithms
 * Medium (40.06%)
 * Total Accepted:    340.4K
 * Total Submissions: 848.2K
 * Testcase Example:  '"23"'
 *
 * Given a string containing digits from 2-9 inclusive, return all possible
 * letter combinations that the number could represent.
 * 
 * A mapping of digit to letters (just like on the telephone buttons) is given
 * below. Note that 1 does not map to any letters.
 * 
 * 
 * 
 * Example:
 * 
 * 
 * Input: "23"
 * Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 * 
 * 
 * Note:
 * 
 * Although the above answer is in lexicographical order, your answer could be
 * in any order you want.
 * 
 */
/**
 *   0   1
 * 
 *       d
 *   a   e
 *       f
 * 
 *       d
 *   b   e
 *       f
 *       
 *       d
 *   c   e
 *       f
 * 
 * 1. 使用一个 prefix 记录已经进入的层次
 * 2. 在 dfs 之前 push、dfs 之后 pop
 * 3. 在 base cast 的时候讲结果 push 进 res
 * 
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function(digits) {
  const wordMap = ['0', '1', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
  const res = [];
  const prefix = [];
  
  if (digits.length) {
    dfsHelper(0);
  }
  return res;

  function dfsHelper(index) {
    // base case
    if (index === digits.length) {
      return res.push(prefix.join(''));
    }
    
    const str = wordMap[Number(digits[index])];
    for (let i = 0; i < str.length; i++) {
      prefix.push(str[i]);
      dfsHelper(index + 1);
      prefix.pop();
    }
  }
};

