var insertionSort = function(nums){
    //[29,10,14,37,14]
   
     for (i=1; i< nums.length  ;i++){
      const key = nums[i]
       j = i -1
    //   while(j>=0 && nums[j]>key){
    //     nums[j+1] = nums[j]
    //     j = j -1

    //   }
    while(j>=0 && nums[j]<key){
        nums[j+1] = nums[j]
        j = j -1

      }
      nums[j+1]=key
    }
    return nums
}
console.log(insertionSort([29,10,14,37,14]))