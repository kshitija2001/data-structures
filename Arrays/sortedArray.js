var sortedSquare = function(nums){
    const result =[]
   
    for (i=0;i<nums.length;i++){
    result.push(nums[i]*nums[i])

    }//end of for loop
    
    return sortArray(result) 
    }//end of function


var sortArray = function(nums){
    var temp
    var swapped = false
    for(i=0;i<nums.length - 1;i++){
        for(j=0;j<nums.length -1;j++){
            if(nums[j]>nums[j+1]){
                temp = nums[j]
                nums[j]=nums[j+1]
                nums[j+1]=temp
                swapped = true

            }
        }

        if(!swapped){
            break
        }
      
    }
    
    return nums
}

const array= sortedSquare([-4,-1,0,3,10])
console.log("array==>",array)