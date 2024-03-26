var isPalindrome = function(x) {
    //121
    //return x === parseInt(x.toString().split("").reverse().join(""))
    return x<0?flase:x === +x.toString().split("").reverse().join("")
};

console.log(isPalindrome(121))