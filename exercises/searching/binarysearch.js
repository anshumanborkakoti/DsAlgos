function binarySearch(sortedArray, toFind) {
    let foundIndex = -1;
    if (!sortedArray || !Array.isArray(sortedArray) || sortedArray.length === 0 || !toFind) {
        return -1;
    }
    //Create two pointers - start and end which are initialized to 0 and //length-1
    //Start a while loop which continues while start < end
    //Find the element at the middle, assign to middle
    //Middle element is at (start+end)/2
    //Compare middle with toFind
    //if equal, set foundIndex to index, break the loop
    //If larger, reduce end by 1.
    //Else increase start by 1

    let start = 0;
    let end = sortedArray.length - 1;
    while (start < end) {
        let middle = Math.ceil((start + end) / 2);
        let middleEl = sortedArray[middle];
        if (middleEl === toFind) {
            foundIndex = middle;
            break;
        }

        if (middleEl > toFind) {
            end--;
        } else {
            start++;
        }

    }

    return foundIndex;
}