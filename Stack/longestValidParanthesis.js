var longestValidParentheses = function(s) {
    if(s.length === 0){
return 0 
    }
let count = 0
let stack = []
    for(let i =0 ;i<s.length;i++){
let char = s[i]
//console.log(longestValidParentheses("()(()"))
if(char === "(" || char ==="{" || char ==="["){
   // if(stack.pop() !== char){
        stack.push(char)
   // }
   

}else if(char === ")" || char ==="}" || char ==="]"){

    const top = stack.pop()
    if((char === ")" && top !=="(") ||
    (char === "}" && top !=="{") ||
    (char === "]" && top !=="{")
    ){
       
        count = 0
    
    }
if((char === ")" && top ==="(") ||
(char === "}" && top ==="{") ||
(char === "]" && top ==="{")
){
   
    count = count + 2

}

}
    }
    
console.log("stack==>",stack)

    return count

   
};


console.log(longestValidParentheses(")()())"))
console.log(longestValidParentheses("(()"))
console.log(longestValidParentheses(""))
console.log(longestValidParentheses("()(()"))
console.log(longestValidParentheses("()(())"))

