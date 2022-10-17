/**
* Find the longest substring without repeating characters
* input-> string, output-> length of longest string with non-repeating characters
* Examples:
*”abcbabc -> 3
*bbbb -> 1
* pwwkew->3
*Constraints -> s.length>=0
*s consists of english letters,digits,symbols and spaces
* create fn longestSubstring() with a string as argument 
* take two pointers i,j=0
* resultStr=''
* Loop i..i<str.length; j=0,j<i
* in i loop use tempResult
* use a hashmap to keep track of each char
* if the char exists in the hashmap, break the j loop
* if not, add to tempResult
*result.length<tempResult.length then assign result to tempresult
* return result length
*/
var lengthOfLongestSubstring = function (aStr) {
    if (aStr.length < 2) {
        return aStr.length;
    }
    let resultStr = '';
    for (let i = 0; i < aStr.length - 1; i++) {
        const freqCounter = {};
        let tempResult = '';
        for (let j = i; j < aStr.length; j++) {
            const char = aStr.substr(j, 1);
            if (freqCounter[char]) {
                break;
            }
            freqCounter[char] = true;
            tempResult += char;
        }
        if (tempResult.length > resultStr.length) {
            resultStr = tempResult;
        }
    }
    return resultStr.length;
}

