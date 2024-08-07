
var convert = function(s, numRows) {



    stringLength = s.length
    
    if(numRows<2 || stringLength < numRows) return s

    let rows = new Array(numRows).fill('')
    let count = 0 //rowNumber
    let direction = false //false = top-bottom || true = bottom - up
    
    for(i=0;i<stringLength;i++){
        rows[count] = rows[count] + s[i]
        direction ? count-- :count++
        if(count === 0 || count === numRows - 1){
            direction = !direction
        }
    }

    return rows.join('')
};

console.log(convert("PAYPALISHIRING",3))
console.log(convert("PAYPALISHIRING",4))
console.log(convert("A",1))
console.log(convert("A",0))
