// var twoSum = function(nums, target) {
//   // const map = new Map()
//   // for(i=1;i<nums.length;i++){
//   //   const pairtarget = target - nums[i]
//   //   if(map.has(pairtarget)){
//   //     return [i,map.get(pairtarget)]
//   //   }else{
//   //     map.set(nums[i],i)
//   //   }
//   // }
//   //   let memo = {};
//   //   let complement;
//   //   for (let i = 0; i < nums.length; i++) {
//   //     if(i > 0 && nums[i] === nums[i-1]) continue
//   //     complement = target - nums[i];
//   //     memo[nums[i]] = complement;

//   //     if(memo[complement]){
//   //         return [nums.indexOf(complement),nums.indexOf(nums[i])];
//   //     }
//   //   }
//   //  return [];
// // let i = 0;
// // let j = nums.length - 1

// // while(i < j){
// //  const sum =  nums[i]+nums[j]

// //     if( sum > target){
// //    j = j - 1
// //    if( i == j){
// //     i = i + 1
// //     j =  nums.length - 1
// // }
// //     }else if( sum< target){
    
// //         i = i + 1
// //        if(i == j){
// //         j = nums.length -1
// //        }
// //     }
// //     else{
// //         return [i,j]
// //     }
// // }
// // return [-1,-1]



// }
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