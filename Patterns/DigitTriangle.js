// 1
// 12
// 123
// 1234
// 12345

function printPattern(n){
    let rows = n
    let char = ""
for(let i = 1;i<=rows;i++){
for(j=1;j<=i;j++){
    char = char + j
}
char = char + "\n"
}

console.log(char);
}

printPattern(5)