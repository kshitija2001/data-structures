var findInRotatedArray = function (arr,target){

    for (i=0;i<arr.length;i++){
        if(arr[i]==target){
            return i
        }
    }

return -1
}

console.log(findInRotatedArray([5, 6, 7, 8, 9, 10, 1, 2, 3],3))
console.log(findInRotatedArray([5, 6, 7, 8, 9, 10, 1, 2, 3],30))
console.log(findInRotatedArray([30, 40, 50, 10, 20],10))