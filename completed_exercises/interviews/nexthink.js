//Problem - given an array of coordinates find the largest subset of coordinates divisble by M
//input - coordinate array, M-> M - aligned number
// Example
//  A[0] = -3
//   A[1] = -2
//   A[2] = 1
//   A[3] = 0
//   A[4] = 8
//   A[5] = 7
//A[6] = 1
// if A.length ===1 -> return 0
// if A is not array, M is NaN, throw error
//Largest subset is of length 4
// create a subset array
// take two pointers i and j
// set i=1, j=0
// loop i to arr.length, j to i
// create a temp subarray array to store coordinates divisible by M
// Subtract abs value of coordinates and see if %M===0
// if yes push into the temp subset array
//in the outerloop compare lengths of subset and temsubset arrays
// if tempsubset is larger, assign to subset
//outside loops, return subset.length
function solution(A, M) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (!Array.isArray(A) || isNaN(M)) {
        throw new Error("Invalid input");
    }
    if (A.length === 0) {
        return 0;
    }
    const subset = [];
    for (let i = 1; i < A.length; i++) {
        const tempsubset = [];
        for (let j = 0; j < i; j++) {
            const mAligned = (Maths.abs(A[j] - A[i]) % M) === 0;
            if (mAligned) {
                tempsubset.push((Maths.abs(A[j] - A[i]) % M));
            }
        }
        if (tempsubset.length > subset.length) {
            subset = [...tempsubset];
        }
    }
    return subset.length;
}
