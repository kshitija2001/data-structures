function minFlip (str){
let result = 0
const neStr = str.split("")
    console.log("neStr",neStr)
    for(let i=0;i<str.length-1 ;i+=2){
        if(neStr[i] !== neStr[i+1]  ){
           
            result = result + 1
        }
    }
console.log("result==>",result)
}

minFlip("101011")
minFlip("100110")