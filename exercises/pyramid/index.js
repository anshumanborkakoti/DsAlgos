// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(levels = 1) {
  const columns = 2 * levels - 1;
  const startIndex = Math.ceil(columns / 2) - 1;
  let str = "";
  for (let rowIndex = 0; rowIndex < levels; rowIndex++) {
    const numberOfPoundsForRow = 2 * rowIndex + 1;
    for (let columnIndex = 0; columnIndex < columns; columnIndex++) {
      const dist = Math.floor(numberOfPoundsForRow / 2);
      if (columnIndex < startIndex - dist || columnIndex > startIndex + dist) {
        str += " ";
      } else {
        str += "#";
      }
    }
    if (rowIndex !== levels - 1) {
      str += "\n";
    }
  }
  console.log(str);
  return str;
}

module.exports = pyramid;
