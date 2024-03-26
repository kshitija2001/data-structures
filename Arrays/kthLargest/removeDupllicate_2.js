var removeDuplicate = function(nums){
    if (nums.length < 4) return nums.length

    let index = 3
    for(i=3;i<nums.length ;i++){
    
// if(nums[i] == nums[index-2]){
//     i++
// }else{
//     nums[index] = nums[i]
//     index++
// }
    
if(nums[i] !== nums[index -3]){
        nums[index++] = nums[i]
  //  index = index + 1
}

           // [0,0,0,1,1,1,2,2,3,3,4]
           // i = 0
           // j = 1
    }

  
    return index
  //console.log(removeDuplicate([0,0,0,1,1,1,2,2,3,3,4] 

}

console.log(removeDuplicate([0,0,0,1,1,1,2,2,3,3,3,3,4]))