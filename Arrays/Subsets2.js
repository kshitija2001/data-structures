var subsets2 = function(nums) {
    var res = [];
    nums.sort((a,b) =>a-b)
    helper(nums, res, [], 0);
    return res;
  };
  
  var helper = function (nums, res, arr, start) {
    console.log("arr==>",arr)
    var len = nums.length;
  
    res.push(Array.from(arr));
  console.log("start",start,"res==>",res)
    if (start === len) return;
  
    for (var i = start; i < len; i++) {
if(i===start || nums[i] !== nums[i-1]){
    arr.push(nums[i]);
    helper(nums, res, arr, i + 1);
    arr.pop();
}
      //  if(nums[i] !=nums[i-1]){
           
        //}
    
    }
  };

  console.log(subsets2([1,2,2]))