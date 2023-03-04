/*
  Write a function sum(n1)(n2)(n3)...(nk)() that could be called arbitrary number of times with numbers and it returns the total sum.

  For example: 
  1. sum(2)(3)(5)()  return 10
  2. sum(7)(4)() return 11
*/
// function sum(x=null,execute=false){
//   //console.log(x)
//   if(execute){
//     //console.log(x)

//     return x;
//   }
//   return function(y=0){
//    // console.log(x,y)
//     execute=!y;
//     return sum.apply(sum,[x+y,execute]);
//   }
// }
//console.log(sum(1)(2)(4)())

function sum(x = null) {
  return function (y) {
    if (Array.from(arguments).length === 0) {
      return x;
    }
    return sum(y + x);
  }
}

console.log(sum(1)(2)(4)())
console.log(sum(2)(3)(5)())
console.log(sum(7)(4)())

//console.log(sum2(1)(2)(4)())

/*
write a function that return a n x n matrix with the elemens ordered in spiral form
getSpiralMatrix(size = 4). The first element starts with number 1 
 
Input:  getSpiralMatrix(4);
output: [
  [1,  2,  3,  4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10, 9,  8,  7]
]
 
https://media.geeksforgeeks.org/wp-content/uploads/spiral1.jpg
* take rowStart, rowEnd, columnStart, columnend pointers
* 
*/

function getSpiralMatrix(size) {
  let result = new Array(size);
  for (let i = 0; i < size; i++) {
    result[i] = new Array(size);
  }
  let columnStart = 0, columnEnd = size - 1, rowStart = 0, rowEnd = size - 1, i = 1;
  while (rowStart <= rowEnd && columnStart <= columnEnd) {
    for (let j = columnStart; j <= columnEnd; j++) {
      // console.log(rowStart,j,result)
      result[rowStart][j] = i++;
    }
    rowStart++;
    for (let j = rowStart; j <= rowEnd; j++) {
      result[j][columnEnd] = i++;
    }
    columnEnd--;
    for (let j = columnEnd; j >= columnStart; j--) {
      result[rowEnd][j] = i++;
    }
    rowEnd--;

    for (let j = rowEnd; j >= rowStart; j--) {
      //console.log(result,j,columnStart)
      result[j][columnStart] = i++;
    }
    columnStart++;
    //console.log("ended",result)
  }

  return result;

}

console.log(getSpiralMatrix(4))


/**
 * Write a recursive function to get the sum of the generator function
 */
function* gen() {
  for (let i = 0; i < 5; i++) yield i;
}
const mygen = gen();
function sum(x = 0, count = 0) {
  //console.log(x,count)
  if (count === 5) {
    return x;
  }
  const s = x + parseInt(mygen.next().value);
  return sum(s, ++count);
}
console.log(sum())