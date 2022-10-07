// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

//My solution:
// function chunk(array, size) {
//   let result = [];
//   const chunks = Math.ceil(array.length / size);
//   for (let cindex = 0; cindex < chunks; cindex++) {
//     const subarray = [];
//     const start = cindex * size;
//     const end = array.length > start + size ? start + size : array.length;
//     for (let subindex = start; subindex < end; subindex++) {
//       subarray.push(array[subindex]);
//     }
//     result.push(subarray);
//   }
//   console.log(result);
//   return result;
// }

//Solution 1:
// function chunk(array, size) {
//   const chunked = [];
//   for (let element of array) {
//     const last = chunked[chunked.length - 1];
//     if (!last || last.length === size) {
//       chunked.push([element]);
//     } else {
//       last.push(element);
//     }
//   }
//   return chunked;
// }

//Solution 2
function chunk(array, size) {
  const chunked = [];
  let index = 0;
  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }
  console.log(array);
  console.log(size);
  console.log(chunked);
  console.log("----------------------------");
  return chunked;
}

module.exports = chunk;
