var fourSum = function(nums, target) {
    nums.sort((a,b)=>a-b)
result = []
    for(i=0;i<nums.length-3;i++){
        if(i>0 && nums[i] === nums[i-1]) continue
        for(j=i+1;j<nums.length-2;j++){
            if(j>i+1 && nums[j] === nums[j-1]) continue

            let left = j +1
            let right= nums.length - 1
            while(left<right){
                const sum = nums[i] + nums[j] + nums[left] + nums[right]

                if(sum > target){
                    right --
                }else if(sum <target){
                    left ++
                }else{
                    result.push([
                        nums[i],
                        nums[j],
                        nums[left],
                        nums[right]
                    ])

                    do {
                        left++;
                    } while (nums[left] == nums[left - 1]);

                    // Move the right-hand edge of the window to the left until it reaches a different number
                    do {
                        right--;
                    } while (nums[right] == nums[right + 1]);
                }
            }
        }
    }
    return result
};

console.log(fourSum([1,0,-1,0,-2,2],0))