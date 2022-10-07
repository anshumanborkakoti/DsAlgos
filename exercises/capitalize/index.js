// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  const words = str.match(/\w+/g);
  for (let word of words) {
    const regex = new RegExp(word, "ig");
    str = str.replace(
      regex,
      word.slice(0, 1).toUpperCase() + word.substring(1)
    );
  }
  return str;
}

module.exports = capitalize;
