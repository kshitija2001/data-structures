var isPrime = function (number){
    
    for( i = 2;i<= number /2 ;i++){
        if(number % i === 0){
            return false
        }
    }
return true
}

console.log(isPrime(7))
console.log(isPrime(10))