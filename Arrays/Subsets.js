var subsets = function(nums) {
    var res = [];
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
      arr.push(nums[i]);
      helper(nums, res, arr, i + 1);
      arr.pop();
    }
  };

  console.log(subsets([1,2,3]))