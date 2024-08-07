var search = function(nums, target) {
    let flag = false
    for (i=0;i<nums.length;i++){
        if(nums[i]===target){
            flag = true
        }
    }
    return flag
};

console.log(search([2,5,6,0,0,1,2],0))
console.log(search([2,5,6,0,0,1,2],3))