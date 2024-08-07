var removeWhiteSpace = function(str){
    output = []
    newStr = str.split(" ")
    for(i=0;i<newStr.length;i++){
        if(newStr[i] !==""){
output.push(newStr[i])
        }
    }

//return str.trim().replace(/\s+/g, ' ').split(" ").join(",")
return output.join(",")
}

console.log(removeWhiteSpace("interview     happy"))