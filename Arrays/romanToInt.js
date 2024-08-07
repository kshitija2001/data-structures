/**
 * @param {string} s
 * @return {number}
 */

function value(r) {
    if (r == 'I')
        return 1;
    if (r == 'V')
        return 5;
    if (r == 'X')
        return 10;
    if (r == 'L')
        return 50;
    if (r == 'C')
        return 100;
    if (r == 'D')
        return 500;
    if (r == 'M')
        return 1000;
    return -1;
}
var romanToInt = function(s) {
    let number = 0
    for(let i=0;i<s.length;i++){
       var s1 = value(s.charAt(i))

       if(i+1 < s.length){
        var s2 = value(s.charAt(i+1))
console.log("s1=>",s1)
console.log("s2=>",s2)
        if(s1 >= s2){
number = number + s1
        }else{
            number = number+s2-s1
            i++
        }
       }else{
        number = number + s1
       }
    }

    console.log("number is ==>",number)
    return number
};

console.log(romanToInt("MCMXCIV"))