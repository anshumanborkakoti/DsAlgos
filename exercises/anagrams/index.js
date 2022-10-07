// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//Solution 1
// function anagrams(stringA, stringB) {
//   const strippedA = stringA.replace(/[^\w]/g, "").toLowerCase();
//   const strippedB = stringB.replace(/[^\w]/g, "").toLowerCase();
//   if (strippedA.length !== strippedB.length) {
//     return false;
//   }
//   const aOb = {};
//   for (let char of strippedA) {
//     aOb[char] = aOb[char] ? aOb[char] + 1 : 1;
//   }
//   const bOb = {};
//   for (let char of strippedB) {
//     bOb[char] = bOb[char] ? bOb[char] + 1 : 1;
//   }
//   console.log(aOb);
//   console.log(bOb);
//   for (let prop in aOb) {
//     if (!bOb[prop] || aOb[prop] !== bOb[prop]) {
//       return false;
//     }
//   }
//   return true;
// }

//Solution 2
function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}
function cleanString(str) {
  return str
    .replace(/[^\w]/, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
}

module.exports = anagrams;
