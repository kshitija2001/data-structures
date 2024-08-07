function findMinMoves(str){
    let moves = 0
    const occurrencesOf = (number,numbers) => numbers.reduce((counter, currentNumber)=> (number === currentNumber ? counter+1 : counter),0)
    const uniq = [...new Set(str)]
    const a = uniq.map(i => ({key: i, value: occurrencesOf(i, str.split(""))}))
    a.forEach((data)=>{
console.log("data==>",data)
if(data.value>1){
    moves = moves + (data.value/2)
}
    })
  
   // console.log(a) // [ {key: 'a', value: 2}, {key: 'b', value: 1}, {key: 'c', value: 1} ]
console.log(Math.floor(moves))
}
findMinMoves("baabacaa")