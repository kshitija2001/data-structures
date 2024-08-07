var fiboNacci = function(n){
if(n<=1){
    return n
}
return fiboNacci(n-1)+fiboNacci(n-2)

}

console.log(fiboNacci(15))