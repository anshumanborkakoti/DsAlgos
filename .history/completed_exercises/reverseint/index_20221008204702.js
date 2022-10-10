// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const reversed = n
    .toString()
    .split('')
    .reverse()
    .join('');

  return parseInt(reversed) * Math.sign(n);
}

/**
* reversing an int
* Input - integer, output -> reversed integer
* Examples
* 123- > 321
* 0 -> 0
* null, nan -> throw error
*-123 -> 321
*Steps
*n=0; reversed=0
* loop till the modulus 10 of the number is greater than 0
* in the loop, reversed =reversed+ modulus 10 of the number
* number=Math.floor(number/10)
* return reversed
*/

function revIntegerMine(aInt) {
  if (isNaN(aInt)) {
    throw new Error("not a number");
  }
  let n = 0
  let reversed = 0;
  while ((aInt % 10) !== 0) {
    reversed = (reversed * 10) + (aInt % 10);
    aInt = Math.trunc(aInt / 10);
  }
  return reversed;
}

console.log(revIntegerMine(12878783))
console.log(revIntegerMine(0))
console.log(revIntegerMine(-123724567889))
console.log(revIntegerMine(null))
console.log(revIntegerMine("eredrew"))
module.exports = reverseInt;
