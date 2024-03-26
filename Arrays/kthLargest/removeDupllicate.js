var removeDuplicate = function(nums){
    if (nums.length === 0) return 0

    let i = 0
    let uniqueArray = []
    uniqueArray.push(nums[i])
    for(j = 1;j<nums.length;j++){
        if(nums[j] !== nums[i]){
            i = i + 1
 
            nums[i ] = nums[j]
            uniqueArray.push(nums[j])
        }
        
  
    }
console.log("uniquearray==>",uniqueArray)
   return i + 1

   
}

//console.log(removeDuplicate([0,0,1,1,1,2,2,3,3,4]))
//console.log(removeDuplicate([0,1,1,1,2,3]))
console.log(removeDuplicate([1,2,3,5,5,6,7]))