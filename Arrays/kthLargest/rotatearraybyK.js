var rotate = function(nums, k) {
    
    let size = nums.length

    if(k>size){
        k = k % size
    }

    var rotated = nums.splice(size - k,size)
    nums.unshift(...rotated)
    return nums
};

console.log(rotate([1,2,3,4,5,6,7],3))
console.log(rotate([-1,-100,3,99],2))
console.log(rotate([1,2,3,4,5,6,7],8))