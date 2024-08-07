var longestValidParentheses = function(s) {
    let open = 0
    let close = 0
    let maxLength = 0
    
    //move forward
    for(let i=0;i<s.length;i++){
        if(s[i]==="("){
            open ++
        }else if(s[i]===")"){
            close ++
        }

        if(open == close){
            maxLength = Math.max(maxLength,open+close)
        }else if(
            close>open
        ){
            open = 0
            close = 0
        }
    
    }

   
      //move backward
       open = 0
       close = 0
       for(let i=s.length -1;i>0;i--){
        if(s[i]==="("){
            open ++
        }else if(s[i]===")"){
            close ++
        }

        if(open == close){
            maxLength = Math.max(maxLength,open+close)
        }else if(
            open>close
        ){
            open = 0
            close = 0
        }
    }

    

    return maxLength
};


console.log(longestValidParentheses(")()())"))
console.log(longestValidParentheses("(()"))
console.log(longestValidParentheses(""))
console.log(longestValidParentheses("()(()"))
console.log(longestValidParentheses("()(())"))

