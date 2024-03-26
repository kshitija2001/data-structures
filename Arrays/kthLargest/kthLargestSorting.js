var findKthLargest = function(nums, k) {
   // const unique = Array.from(new Set(nums))
        const sort = nums.sort((a,b)=> b-a)
        console.log("sorted==>",sort)
    return sort[k-1]
    
    };


    console.log(findKthLargest([3,2,3,1,2,4,5,5,6],4))
    console.log(findKthLargest([3,2,1,5,6,4],2))