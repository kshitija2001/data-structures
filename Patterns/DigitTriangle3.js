// 1
// 2 3
// 4 5 6
// 7 8 9 10

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