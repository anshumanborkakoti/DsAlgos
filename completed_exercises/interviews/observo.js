/**
* Input -> Floating point number
* Output -> Number formatted in indian rupee
* Rules
* comma after the 1000s
* followed by comma after every 10pow2 digit
* no leading comma
* Eg
* 1234.55 -> 1,234.55
* 0.00 -> 0.00
* 1234567.77 -> 12,34,567.77
* check if the number is valid
* result=''
* get the integer part with Math.trunc() call it integer
* check to see if integer is less that 0, store '-' in sign
* Store absolute in absNum
* get decimal by subtracting integer from num, store in decimal
* count digits and store in number of digits
* use a for loop from i=1 i<=num of digits
* in the loop
* prepend num to result
* if i===3, prepend a comma
* if i> 3 && i%2 !==0, prepend a comma
* 
* return sign9+result+decimal
*/

const indianRupee = (num) =>{
  
    if(isNaN(num)){
      throw new Error("Invalid")
    }
    
    
    let integer=Math.trunc(num);
    let result= integer ===0? '0':'';
    const decimal=(num-integer).toFixed(2).substr(1);
    
    const sign=num<0? '-':'';
    const numOfDigits=Math.floor(Math.log10(Math.abs(integer))) +1;
    for(let i=1;i<=numOfDigits;i++){
      result=(integer % 10)+result;
      if((i===3 && i<numOfDigits) || (i>3 && i%2 !==0 && i<numOfDigits)){
        result=','+result;
      }
      integer=Math.floor(integer/10);
    }
    return sign+result+decimal;
    
  }
  
  console.log(indianRupee(0))
  console.log(indianRupee(1234567.77))
  console.log(indianRupee(123467.77))
  console.log(indianRupee(123))