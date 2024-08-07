function findTripletsDivisibleByD(arr,d){
let count = 0
for(i=0;i<arr.length-2;i++){
    for(j=i+1;j<arr.length-1;j++){
        for(k=j+1;k<arr.length;k++){
            let sum = arr[i]+arr[j]+arr[k]
            if( sum % d == 0){
                count = count + 1
            }

        }
    }
}
console.log(count)
}
findTripletsDivisibleByD([3,3,4,7,8],5)
