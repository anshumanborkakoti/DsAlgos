// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let chars = {};
  for (let char of str) {
    chars[char] = chars[char] ? chars[char] + 1 : 1;
  }
  let mostCommon = 0;
  let mcp = "";
  for (let prop in chars) {
    if (chars[prop] > mostCommon) {
      mostCommon = chars[prop];
      mcp = prop;
    }
  }
  return mcp;
}

module.exports = maxChar;
