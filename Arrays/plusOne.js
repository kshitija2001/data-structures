var plusOne = function(digits) {
    for ( i = digits.length - 1; i >= 0; i--) {
        if (digits[i] == 9) {
          digits[i] = 0;
        } else {
          digits[i] = digits[i] + 1;
          return digits;
        }
      }
   var result = [digits.length + 1]
      result[0] = 1;
      return [...result,...digits]  
}

console.log(plusOne([9]))
console.log(plusOne([4,3,2,1]))
console.log(plusOne([1,2,3]))