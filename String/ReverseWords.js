/**
 * https://leetcode.com/problems/reverse-words-in-a-string/
 * 
 * 翻转字符串里的单词
 * 
 * @param {string} str
 * @returns {string}
 */
function reverseWords(str) {
  str = str
    .replace(/\s+/g, ' ')
    .trim();
    
  if (!str) { return ''; }

  return str
    .split(' ')
    .reverse()
    .join(' ');
}