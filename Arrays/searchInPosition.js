var searchInsert = function(nums, target) {
    // for (let i = 0; i < nums.length; i++) {
    //     console.log("element=>",nums[i])
    //     if (nums[i] >= target) {
    //         return i;
    //     }
    // }
    // return nums.length;

    let left = 0
    let right = nums.length

    while(left<right){
        let middle = Math.floor((left+right)/2)
        if(nums[middle] === target){
            return middle
        }else if(nums[middle] < target){
            left = middle + 1 
        }else{
            right = middle
        }
    }

    return left
};

console.log(searchInsert([1,3,5,6],5))
console.log(searchInsert([1,3,5,6],2))
console.log(searchInsert([1,3,5,6],7))