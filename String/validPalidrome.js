var isPalindrome = function(s) {
 
    s = s.replace(/[^a-zA-Z0-9]/g,"").toLowerCase()
    if(s.length === 0){
        return true
    }
    let start = 0
    console.log("length =>",s.length,s)
    let end = s.length - 1 // 3 -1 = 2, 0 1 2
    while(start < end){
        if(s[end] !== s[start]){
           return false 
        }
        start ++
        end --
        }
        return true
   //console.log("s is ==>",s.replace(/[^a-zA-Z0-9]/g,"").toLowerCase().split("").reverse().join(""))
   // return s === s.replace(/[^a-zA-Z0-9]/g,"").toLowerCase().split("").reverse().join("")
};

console.log(isPalindrome("race a car"))
console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome(" "))