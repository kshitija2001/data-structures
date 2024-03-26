
var shortestPalindrome = function(s){
flag = true
var newString 
for (i=0;i<s.length;i++){

    if(s[i] !==s[i-s.length -1 /2]){

        newString = s.slice(0,i)+ s[i]+s.slice(i)
       var newS = shortestPalindrome(newString)
       console.log("newS==>",newS)
     
    }
}
return newS
}
//aacecaaa
//abcd
console.log("shortestPalindrome=-=>",shortestPalindrome("aacecaaa"))

