// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  //   return str
  //     .split("")
  //     .reverse()
  //     .join("");
  let reversed = "";
  //   for (let index = str.length - 1; index > -1; index--) {
  //     reversed += str.charAt(index);
  //   }

  //   for (let character of str) {
  //     reversed = character + reversed;
  //   }

  reversed = str.split("").reduce((rev, character) => character + rev, "");
  return reversed;
}

module.exports = reverse;
