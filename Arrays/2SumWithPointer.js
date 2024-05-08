var twoSum = function(nums, target) {
  nums.sort((a,b)=>a-b)
  for(i=0;i<nums.length - 1;i++){
    if(i > 0 && nums[i] === nums[i-1]) continue
for(j=i+1;j<nums.length;j++){
if(j > i+1 && nums[j] === nums[j-1]) continue
const sum = nums[i]+nums[j]
if(sum ==target){

return [i,j]
}
else if(sum > target){
j --
}else {
i ++
}
}
}
}


// console.log(twoSum([11,7,2,15],9))
// console.log(twoSum([7,11,2,15],9))
console.log(twoSum([2,7,11,15],9))
// console.log(twoSum([3,2,4],6))
// console.log(twoSum([-10,-1,-18,-19],-19))