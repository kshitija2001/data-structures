var selectionSort = function(nums){
    //[29,10,14,37,14]
    // for (i=0; i< nums.length - 1 ;i++){
    //     minIndex = i // index of min element
    //     for(j=i+1;j<nums.length ;j++){
    //         if(nums[j]<nums[minIndex]){
    //             minIndex = j
    //         }
    //     }

    //     if(minIndex !== i){
    //        temp = nums[i]
    //        nums[i] = nums[minIndex]
    //        nums[minIndex] = temp
    //     }
    // }
     for (i=0; i< nums.length - 1 ;i++){
        maxIndex = i // index of min element
        for(j=i+1;j<nums.length ;j++){
            if(nums[j]>nums[maxIndex]){
                maxIndex = j
            }
        }

        if(maxIndex !== i){
           temp = nums[i]
           nums[i] = nums[maxIndex]
           nums[maxIndex] = temp
        }
    }
    return nums
}
console.log(selectionSort([29,10,14,37,14]))