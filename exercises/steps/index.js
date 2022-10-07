// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  let index = 0;
  let result = "";
  while (index < n) {
    const poundlength = index + 1;
    let poundindex = 0;
    let spaceindex = 0;
    while (poundindex < poundlength) {
      result += "#";
      poundindex++;
    }
    while (spaceindex < n - poundlength) {
      result += " ";
      spaceindex++;
    }
    console.log(result);
    result = "";
    index++;
  }
}

module.exports = steps;
