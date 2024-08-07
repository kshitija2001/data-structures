var quickSort = function(array){

  return quickSortOptimised(array)
}

function pivot(array,start=0,end=array.length-1){
    function swap(array,i,j){
        var temp = array[i]
        array[i]=array[j]
        array[j]=temp
}
    let pivot = array[start]
    let swapIndex = start

    for(i=start+1;i<array.length;i++){
        if(array[i]<pivot){
            swapIndex++
            swap(array,swapIndex,i)
        }
    }
swap(array, start,swapIndex)
return swapIndex
}

function quickSortOptimised(array,start=0,end=array.length-1){
    if(start<end){
        var pivoTIndex = pivot(array,start,end)
        quickSortOptimised(array,start,pivoTIndex-1)
        quickSortOptimised(array,pivoTIndex+1,end)
        
            }

            return array
}

console.log(quickSort([29,10,14,37,14]))
console.log(quickSort([5,2,3,1]))