var rangeOfNumbers = function(startNum,endNum){
 console.log("startNum=>",startNum,"endNum=>",endNum)


if(endNum<startNum){
   return []
}else{
    const array = rangeOfNumbers(startNum,endNum-1)
    array.push(endNum)
    return array
}
    

}

console.log(rangeOfNumbers(0,5))