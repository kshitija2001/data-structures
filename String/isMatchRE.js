var isMatch = function(s, p) {
    return recursionMatch(0,0,s,p)
};

var recursionMatch = function(i,j,str,pat){
    inputStringLength = str.length
    patternStringLength = pat.length

    if(j == patternStringLength){
        return i == inputStringLength
    }

    if(j+1< patternStringLength && pat.charAt(j+1)=="*"){
        if(recursionMatch(i,j+2,str,pat)) return true
        while(i <inputStringLength && (pat.charAt(j)=="." || str.charAt(i)==pat.charAt(j))){
            if(recursionMatch(++i,j+2,str,pat)) return true
        }
    }else
    if(i<inputStringLength && (pat.charAt(j)=="." || str.charAt(i) == pat.charAt(j))){
        return recursionMatch(i+1,j+1,str,pat)

    }
return false

}

console.log(isMatch("aa","a"))
console.log(isMatch("aa","a."))
console.log(isMatch("aa","a*"))
console.log(isMatch("aa","ab*"))
console.log(isMatch("aa","b*"))
console.log(isMatch("aa","ab.*"))
console.log(isMatch("aa","a.*"))
console.log(isMatch("ab","a.*"))
console.log(isMatch("ab",".*"))
console.log(isMatch("abc","ab.*"))