/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let size = nums.length

   if(k > size){
       k = k % size
   }

   // var rotated = nums.splice(size - k,size)
   // nums.unshift(...rotated)
   reverese(nums,0,nums.length-1)
      reverese(nums,0,k-1)
         reverese(nums,k,nums.length-1)
   return nums
};

var reverese = function(nums,left,right){
while(left<right){
   const temp = nums[left]
    nums[left] = nums[right]
    nums[right] = temp
    left++
    right--

}

}