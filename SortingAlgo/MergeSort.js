var mergeSort = function(array){


    if(array.length<=1) {
        return array
    }
    let mid = Math.floor((array.length/2))
    let left = mergeSort(array.slice(0,mid))
    let right = mergeSort(array.slice(mid))

    return merge(left,right)
}

var merge = function(left,right){
    let sortedArray = []
    while(left.length && right.length){
        if(left[0]<right[0]){
            sortedArray.push(left.shift())
        }else{
            sortedArray.push(right.shift())
        }
    }

    return [...sortedArray,...left,...right]
}

console.log(mergeSort([29,10,14,37,14]))
console.log(mergeSort([5,2,3,1]))
