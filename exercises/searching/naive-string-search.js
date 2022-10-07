//Take two arguments strToSearch and valueToSearch
//Initialize a variable count and return it
//Check if strToSearch and valueToSearch are strings. Throw error if not
// If valueToSearch is blank count=strToSearch.length
//If strToSearch is blank, return 0
//Length of valueToSearch > length of stringToSearch, return 0
//start a loop with index 1 at 0 to < strToSearch.length - valueToSearch.length
//Take substring of strToSearch with index at 1 and length = valueToSearch.length
//Compare strings. If equal count++ else continue
//Return count
function naiveStringSearch(strToSearch, valueToSearch) {
    let count = 0;
    if (!_isString(strToSearch) || !_isString(valueToSearch)) {
        console.error(`${strToSearch} or ${valueToSearch} not strings!`);
        return;
    }
    if (valueToSearch.trim() === '') {
        return strToSearch.length;
    }
    if (strToSearch.trim() === '' || (valueToSearch.length > strToSearch.length)) {
        return 0;
    }
    count = _naive(strToSearch, valueToSearch);
    console.log(`input ${strToSearch},  Output: ${valueToSearch}, Result: ${count}`)
    return count;
}
function _naive(strToSearch, valueToSearch) {
    let count = 0;
    for (let i = 0; i < (strToSearch.length - valueToSearch.length); i++) {
        const sub = strToSearch.substr(i, valueToSearch.length);
        if (sub === valueToSearch) {
            count++;
        }
    }
    return count;
}

function _isString(val) {
    return Object.prototype.toString.call(val) === '[object String]'
}

naiveStringSearch('hello', 'hell'); //1
naiveStringSearch('oohaah oohaah', 'o') //4
naiveStringSearch('Hi there', 'ere') //1
naiveStringSearch('Hi there', 'it') //0
naiveStringSearch('#@#$%45Yes1 1212#$%$^', '12'); //1
naiveStringSearch('dfdsfds', ''); // return length of string
naiveStringSearch('', 'dsfdsf'); //Return 0;
naiveStringSearch(null, 21); //Invalid
naiveStringSearch(null, true);
naiveStringSearch(2121, 21); //invalid
naiveStringSearch(true, 'tr'); //Invalid