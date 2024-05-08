var removeElement = function(nums, val) {
     count = 0;
        // Loop through all the elements of the array
        for ( i = 0; i < nums.length; i++) {
            // If the element is not val
            if (nums[i] != val) {
                nums[count++] = nums[i];
            }
        }
        return count;
    
    // for(i=0;i<nums.length;i++){
    //     if(nums[i] === val){
    //         if(nums[i+1]=== nums[i]){
    //             nums.splice(i+1,1)
         
    //         }
    //         console.log(nums[i], "at",i, "euqal to val")
    //       nums.splice(i,1)
        
    //     }
    // }


};

// console.log(removeElement([1,2,3,4,3],3))
// console.log(removeElement(
//     [3,2,2,3],3))
//console.log(removeElement([0,1,2,2,3,0,4,2],2))
console.log(removeElement([2,2,2],2))