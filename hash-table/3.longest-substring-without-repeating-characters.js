/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 *
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (26.09%)
 * Total Accepted:    741.6K
 * Total Submissions: 2.8M
 * Testcase Example:  '"abcabcbb"'
 *
 * Given a string, find the length of the longest substring without repeating
 * characters.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: "abcabcbb"
 * Output: 3 
 * Explanation: The answer is "abc", with the length of 3. 
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 * 
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3. 
 * ⁠            Note that the answer must be a substring, "pwke" is a
 * subsequence and not a substring.
 * 
 * 
 * 
 * 
 * 
 */
/**
 * 滑动窗口算法
 * 1. 用字符作 key，index + 1 作 val，记录 hashmap
 * 2. 如果有重复的，把 i 往右移动
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
  const n = s.length;
  let ans = 0;
  const map = new Map();
  // j 负责向右边遍历，i 根据重复字符的情况进行调整
  for (let i = 0, j = 0; j < n; j++) {
    // 当发现重复的字符时, 将字符的索引与窗口的左边进行对比，
    // 将窗口的左边直接跳到该重复字符的索引处
    if (map.has(s[j])) {
      i = Math.max(map.get(s[j]), i);
    }

    // 记录子字符串的最大的长度
    ans = Math.max(ans, j - i + 1);
    //map 记录第一次遍历到 key 时的索引位置
    // j + 1 保证 i 跳到不包含重复字母的位置
    map.set(s[j], j + 1);
  }

  return ans;
};

