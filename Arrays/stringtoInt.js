var myAtoi = function(s) {
    const INT_MIN = -2147483648;
const INT_MAX = 2147483647;
    let trimmed = s.trim()
    if(trimmed.charAt(0)!= '+' && trimmed.charAt(0)!= '-' && isNaN(trimmed.charAt(0))){
        return 0;
    }

    //check for the pattern -+ or +-
    if(trimmed.includes('+-') || trimmed.includes('-+')){
        return 0;
    }
    //check for invalid + or -
    if(trimmed.charAt(0) == '+' || trimmed.charAt(0) == '-'){
        const firstDigit = parseInt(trimmed.charAt(1));
        console.log("firstDigit",firstDigit)
        if(isNaN(firstDigit)){
            return 0;
        }
    }
    const first = s.match(/\-*\d+/g);
    if(first){
    if(first[0]> INT_MAX){
        return INT_MAX
    }
    if(first[0]< INT_MIN){
        return INT_MIN
    }
    return  parseInt(first[0])

    }
 return 0
};
console.log(myAtoi("  -42"))
console.log(myAtoi("-4193 with words"))
console.log(myAtoi("with words 987"))
console.log(myAtoi("-91283472332"))
console.log(myAtoi("3.13"))
console.log(myAtoi(".1"))
