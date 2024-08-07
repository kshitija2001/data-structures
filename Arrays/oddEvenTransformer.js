function oddEvenTransformer(arr,n){
for(i=0;i<n;i++){
    if(arr[i] %2 !==0){
        arr[i] = arr[i] + 3
    }else{
        arr[i] = arr[i] - 3
    }
}
console.log(arr)
}
oddEvenTransformer([3,4,9],3)