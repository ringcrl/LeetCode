/*
 * @lc app=leetcode id=345 lang=javascript
 *
 * [345] Reverse Vowels of a String
 *
 * https://leetcode.com/problems/reverse-vowels-of-a-string/description/
 *
 * algorithms
 * Easy (40.71%)
 * Total Accepted:    140.9K
 * Total Submissions: 346K
 * Testcase Example:  '"hello"'
 *
 * Write a function that takes a string as input and reverse only the vowels of
 * a string.
 * 
 * Example 1:
 * 
 * 
 * Input: "hello"
 * Output: "holle"
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "leetcode"
 * Output: "leotcede"
 * 
 * 
 * Note:
 * The vowels does not include the letter "y".
 * 
 * 
 * 
 */
/**
 * 反转字符串中的元音字符
 * 1. 使用双指针指向待反转的两个元音字符
 * @param {string} s
 * @return {string}
 */
const reverseVowels = function(s) {
  let left = 0;
  let right = s.length - 1;
  const result = [];
  const vowlesReg = /[aeiou]/i;
  while (left <= right) {
    const cLeft = s[left];
    const cRight = s[right];
    if (!vowlesReg.test(cLeft)) {
      result[left] = cLeft;
      left++;
    } else if (!vowlesReg.test(cRight)) {
      result[right] = cRight;
      right--;
    } else {
      result[left] = cRight;
      result[right] = cLeft;
      left++;
      right--;
    }
  }

  return result.join('');
};
