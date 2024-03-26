var quickSort = function(nums){
    //[29,10,14,37,14]
    if(nums.length<=1){
        return nums
    }
    let pivot = nums[0]
  const  left=[]
   const right=[]
    
    for(i = 1;i<nums.length;i++){
        if(nums[i]<pivot){
            left.push(nums[i])
        }else{
            right.push(nums[i])
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)]
   
}

//5,2,3,1
console.log(quickSort([29,10,14,37,14]))
console.log(quickSort([5,2,3,1]))