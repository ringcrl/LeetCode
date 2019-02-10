/**
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