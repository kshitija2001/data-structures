const INT_MIN = -2147483648;
const INT_MAX = 2147483647;

const myAtoi = function(input) {
    
    //check the first whitespace character is a number
    let temp = input.trim();
    if(temp.charAt(0)!= '+' && temp.charAt(0)!= '-' && isNaN(temp.charAt(0))){
        return 0;
    }

    //check for the pattern -+ or +-
    if(temp.includes('+-') || temp.includes('-+')){
        return 0;
    }
    //check for invalid + or -
    if(temp.charAt(0) == '+' || temp.charAt(0) == '-'){
        const firstDigit = parseInt(temp.charAt(1));
        if(isNaN(firstDigit)){
            return 0;
        }
    }


    //extract the first number
    const first = input.match(/\-*\d+/g);
console.log("first==>",first)
    //if a number was found
    if(first){
        //check that the number is in range
        if(first[0] < INT_MIN)
            return INT_MIN;
        if(first[0] > INT_MAX)
            return INT_MAX;
        
        //number is in range
        return parseInt(first[0]);
    }
    //no number was found
    return 0;
}
console.log(myAtoi("  -42"))
console.log(myAtoi("-4193 with words"))
console.log(myAtoi("with words 987"))
console.log(myAtoi("-91283472332"))
console.log(myAtoi("3.14159"))
console.log(myAtoi(".1"))
