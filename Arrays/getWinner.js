function getWinner(arr1,arr2,startFlag){
let count = 0
let result = 0
while(count<arr1.length && count<arr2.length){
    if(startFlag === "even" && (count+1)%2===0){
result = result + (arr1[count] - arr2[count])
    }else{
        result = result + (arr1[count] - arr2[count])
    }
    count++
}
if(result < 0){
    console.log("jerry")
}else if(result > 0){
    console.log("tom")
}else{
    console.log("tie") 
}
console.log("result==?>",result)

}
//[2,2,3]
//[3,1,4]
getWinner([2,2,3],[3,1,4],"odd")