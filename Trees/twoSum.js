var twosum = function(nums,target){
    for(i=0;i<nums.length;i++){
    for(j=i+1;j<nums.length;j++){
    if(nums[i]+nums[j]==target){
    return [i,j]
    }
    }
    }
    
    }

   const o = twosum([5,2,5,5,11],10)
   console.log("o==>",o)