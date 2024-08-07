var factorial = function (number){
    if(number === 0) return 1
    let fact = 1
for(i = number ;i >  0 ;i--){
fact = i *  fact
}
return fact
}

console.log(factorial(3))
console.log(factorial(5))