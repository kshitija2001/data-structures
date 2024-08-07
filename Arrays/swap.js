function intSwap(n){

    let digits = n.toString().split("")

    for(i=0;i<digits.length-1;i++){
        if(parseInt(digits[i]) % 2 === 0 && parseInt(digits[i+1]) % 2 === 0){
            var temp = digits[i]
            digits[i] = digits[i+1]
            digits[i+1] = temp

        }else if(parseInt(digits[i]) % 2 === 1 && parseInt(digits[i+1]) % 2 === 1){
            var temp = digits[i]
            digits[i] = digits[i+1]
            digits[i+1] = temp
        }else{
            continue
        }
    }
    return parseInt(digits.join(""))
}
console.log(intSwap(597683))
