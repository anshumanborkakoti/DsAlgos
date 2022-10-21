// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  // Implement bubblesort
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const lesser = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = lesser;
      }
    }
  }

  // return the sorted array
  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }

    if (indexOfMin !== i) {
      let lesser = arr[indexOfMin];
      arr[indexOfMin] = arr[i];
      arr[i] = lesser;
    }
  }

  return arr;
}

//Insertion sort

//Input - array
//Output - sorted array
/**
*[1,3,5,2] -> [1,2,3,5]
* [-1,30,3,6,7,5] -> [-1,3,5,6,7,30]
* [] -> []
* 2 -> throw exception
*/
/**
* Insertion sort - one half of the array is sorted and any new number added to it is inserted in its correct postion of the sorted array
* find the sorted end by running a loop and and storing the index upto which the array is sorted from 0 to length
* start a loop from current=sortedEnd+1 to 0
* compare with current-1 and swap if current is smaller
*swap arr[sortedEnd] with arr[sortedEnd+1]
* set sortedEnd=sortedEnd+1
* 
*/

function insertionSort(arr) {
  //find sorted end
  let sortedEnd = 0
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] < arr[i]) {
      sortedEnd = i;
    } else { break; }
  }
  console.log(`sorted end ${sortedEnd}`)
  for (; sortedEnd < arr.length; sortedEnd++) {
    for (let current = sortedEnd + 1; current < arr.length && current > 0; current--) {
      if (arr[current - 1] > arr[current]) {
        const temp = arr[current - 1];
        arr[current - 1] = arr[current];
        arr[current] = temp;
      }
    }
  }
  return arr;

}


function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  const center = Math.floor(arr.length / 2);
  const left = arr.slice(0, center);
  const right = arr.slice(center);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const results = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }

  return [...results, ...left, ...right];
}

// []=> []
// Not array, array without numbers => throw error
//Pseudo
//Spread the inout array over a sortedArray var
//Count the largest number of digits in any number
//Loop over the number of digits times. Let this be i
//create a radixArray double dim with length 10 initialized to empty arrays
// iterate over the sortedArray
//For each number extract the last digit after dividing the number with power of 10 of i
//Find the index of this last digit in the sortedArray and push the number in that array
//Outside the inner loop, spread the radixArray into sortedArray
//return the sortedArray

function radixSort(arr) {
  if (!Array.isArray(arr) || arr.some(element => isNaN(element))) {
    throw new Error("Invalid");
  }
  if (arr.length === 0) {
    return [];
  }
  let sortedArray = [...arr];
  let largestDigits = 0;
  for (let num of sortedArray) {
    const digitCount = getDigitCount(num);
    if (digitCount > largestDigits) {
      largestDigits = digitCount;
    }
  }
  for (let i = 0; i < largestDigits; i++) {
    const radixArray = new Array([], [], [], [], [], [], [], [], [], []);
    for (let num of sortedArray) {
      const lastDigit = getLastDigit(num, i);
      radixArray[lastDigit].push(num);
    }
    sortedArray = [].concat(...radixArray);
  }
  return sortedArray;

}

function getDigitCount(num) {
  //console.log(`num ${num} last digit ${Math.floor(Math.log10(Math.abs(num)))+1}`)
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function getLastDigit(num, pow) {
  const abs = Math.abs(num);
  const divider = Math.pow(10, pow);
  // console.log(`getLastDigit num ${num} pow ${pow} last digit ${ Math.floor(abs/divider)%10}`)
  return Math.floor(abs / divider) % 10;
}

//Quick sort
// To sort an array with O(n logn)
// Input => array
// Output => aorted array
//Output can be derived from input
// labels functions  -quickSort, pivot, array
// Examples
// [1,5,34,2]=> [1,2,5,34]
// [-1,6,12,5,-67] => [-67,-1,5,6,12]
// [] => []
// Not array => throw error
//array not containing numbers => throw error
//pseduo
// create a function called mergeSort which takes in the array, start and end indices, initialize start=0, end=length-1
// in mergesort => check for all exceptional scenarios
// call pivot with the first element as start index and length as end index
// once the pivot index is returned, recursively call mergesort with start indices before pivot and after pivot
//base case start<end
//return the merged array
// in pivot function, take in the array and start and end indices.
//default start=0,end =length-1
// create a swap function to swap two index positions of the array
//create swapIndex initialized to 0
//iterate through the array and check if the element at swapIndex is greater than the curren index, if so swap left
//update swapIndex to new index
//return the swapIndex

function pivot(arr, startIndex = 0, endIndex = arr.length - 1) {
  const swap = (arr, startIndex, endIndex) => [arr[startIndex], arr[endIndex]] = [arr[endIndex], arr[startIndex]];
  let swapIndex = startIndex;
  let pivotIndex = startIndex;
  for (let i = startIndex + 1; i <= endIndex; i++) {
    if (arr[pivotIndex] > arr[i]) {
      swap(arr, ++swapIndex, i);
    }
  }
  //finally swap pivot
  swap(arr, pivotIndex, swapIndex);
  pivotIndex = swapIndex;
  return pivotIndex;
}

function quickSort(arr, startIndex = 0, endIndex = arr.length - 1) {
  if (!Array.isArray(arr) || arr.some(element => isNaN(element))) {
    throw new Error("error!");
  }
  if (arr.length == 0) {
    return [];
  }
  if (startIndex >= endIndex) {
    return arr;
  }
  const pivotIndex = pivot(arr, startIndex, endIndex);
  quickSort(arr, startIndex, pivotIndex - 1)
  quickSort(arr, pivotIndex + 1, endIndex)
  return arr;
}


module.exports = { bubbleSort, selectionSort, mergeSort, merge, radixSort, insertionSort, quickSort };
