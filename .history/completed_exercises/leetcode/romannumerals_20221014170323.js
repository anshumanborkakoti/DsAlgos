/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const numeralMap = {
		'I': 1,
		'V':5,
		'X': 10,
		'L': 50,
		'C': 100,
		'D': 500,
		'M': 1000
	}
let result = 0;
for (let i = 0; i < s.length; s++){
    let add = 0;
    const char = s.substr(i, 1);
    const nextChar = s.substr(i, i + 1) ? s.substr(i, i + 1) :'';
    if (char ==='I' && nextChar ==='V') {
        add = 4;
        ++i;
    }else if (char ==='I' && nextChar ==='X') {
        add = 9;
        ++i;
    }else if (char ==='X' && nextChar ==='L') {
        add = 40;
        ++i;
    }else if (char ==='X' && nextChar ==='C') {
        add = 90;
        ++i;
    }else if (char ==='X' && nextChar ==='C') {
        add = 90;
        ++i;
    }else if (char ==='C' && nextChar ==='D') {
        add = 400;
        ++i;
    }else if (char ==='C' && nextChar ==='M') {
        add = 900;
        ++i;
    }else {
        add = numeralMap[char];
    }
    result += add;

}
return result;
}
