// 1
// 22
// 333
// 4444
// 55555

function printPattern2(n){
    let rows = n
    let char = ""
for(let i = 1;i<=rows;i++){
for(j=1;j<=i;j++){
    char = char + i 
}
char = char + "\n"
}

console.log(char);
}

printPattern2(5)