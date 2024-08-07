var reverseWords = function(s) {
    const splitt = s.split(" ")
    const stack = []

    for(i in splitt){
        stack.push(splitt[i])
    }
let final = ""
    while(stack.length){
        let current = stack.pop()
        if(current){
             final = final + " "+ current
        }
    }

    return final.trim()
};

console.log(reverseWords("the sky is blue"))
console.log(reverseWords("  hello world  "))