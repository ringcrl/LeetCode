/**
 * https://leetcode.com/problems/regular-expression-matching/
 * 
 * 正则匹配
 * - Hard 难度？可能 JS 提供了语法构造函数，其他语言要自己实现？
 * 
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = function (s, p) {
  const reg = new RegExp(`^${p}$`);
  return reg.test(s);
};