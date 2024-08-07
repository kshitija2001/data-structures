var bubbleSort = function(nums){
    //[29,10,14,37,14]
    for (i=0; i< nums.length ;i++){
        for(j=0;j<nums.length - i -1 ;j++){
            // if(nums[j]>nums[j+1]){
            //     // temp =  nums[j]
            //     // nums[j] = nums[j+1]
            //     // nums[j+1] = temp
            //     [nums[j],nums[j+1]] =[nums[j+1],nums[j]]
            // }
            if(nums[j]<nums[j+1]){
                temp =  nums[j+1]
                nums[j+1] = nums[j]
                nums[j] = temp
              //  [nums[j],nums[j+1]] =[nums[j+1],nums[j]]
            }
        }
    }
    return nums
}
console.log(bubbleSort([29,10,14,37,14]))