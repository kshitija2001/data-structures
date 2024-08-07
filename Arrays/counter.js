function counter(arr){
let result = []

result.push(0)
for(let i=1;i<arr.length;i++){
     let sum = 0
   for(let j=0;j<i;j++){
    sum = sum + arr[i] - arr[j]
   }
   result.push(sum)
}
console.log(result)
}

counter([2,4,3])
counter([2,1,3])