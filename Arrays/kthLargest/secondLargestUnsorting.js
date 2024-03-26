var findSecondLargest = function(nums, k) {
let largest = -1
let secondLargest = -1
let current = nums[0]

for(i=0;i<nums.length;i++){
if(nums[i]>largest ){
secondLargest = largest
    largest = nums[i]
   
}else if(nums[i]!=largest && nums[i] >secondLargest ){
    secondLargest = nums[i]
   
}
}
console.log("largest ==>",largest)
console.log("secondLargest ==>",secondLargest) 
return secondLargest


    };


    console.log(findSecondLargest([3,2,3,1,2,4,5,5,6],4))
   // console.log(findKthLargest([3,2,1,5,6,4],2))

    //[3,2,1,5,6,4]