var threeSum = function(nums,target) {
    //for loop n^3 complexity
    let result =[]
nums = nums.slice().sort((a,b)=>a -b)
for(i=0;i<nums.length - 2;i++){
    if(i > 0 && nums[i] === nums[i-1]) continue
  
    let left = i + 1
    let right = nums.length - 1
    while(left < right){
      const sum = nums[i] + nums[left] + nums[right]
        if(sum < target){
          left = left + 1
        }else if(sum > target){
           right = right - 1
        }else{
            result.push([nums[i],nums[left],nums[right]])
       //avoid duplicate of left and right
            left++;
            while (left < right && nums[left] === nums[left - 1]) left++
        }
    }
    }
//   for(i=0;i<nums.length - 2;i++){
//     if(i > 0 && nums[i] === nums[i-1]) continue
//     for(j=i+1;j<nums.length - 1;j++){
//         if(j > i+ 1 && nums[j] === nums[j-1]) continue
//         for(k=j+1;k<nums.length;k++){
//             if(k > j+ 1 && nums[k] === nums[k-1]) continue
//             if(nums[i]+nums[j]+nums[k]==target){
             
//                     result.push([nums[i],nums[j],nums[k]])
        
//                 }
                
//             }
//         }
//     }
    return result
  };
 
// let result = [];
//     const hash = {};
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             const complement = target - (nums[i] + nums[j]);
//             if (complement in hash) {
//                 result.push([nums[i], nums[j], complement]);
//             } else {
//                 hash[nums[j]] = true;
//             }
//         }
//     }
   
//     return result;
// let result = [];
// nums.sort((a, b) => a - b);
// for (let i = 0; i < nums.length - 2; i++) {
//     if (i > 0 && nums[i] === nums[i - 1]) continue;
//     let left = i + 1;
//     let right = nums.length - 1;
//     while (left < right) {
//         const sum = nums[i] + nums[left] + nums[right];
//         if (sum === target) {
//             result.push([nums[i], nums[left], nums[right]]);
//             while (left < right && nums[left] === nums[left + 1]) left++;
//             while (left < right && nums[right] === nums[right - 1]) right--;
//             left++;
//             right--;
//         } else if (sum < target) {
//             left++;
//         } else {
//             right--;
//         }
//     }
// }
// return result;


console.log(threeSum([-1,0,1,2,-1,-4],0))