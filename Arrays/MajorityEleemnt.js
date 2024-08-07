var majorityElement = function(nums) {
    // Define the majority number to reach
    const majority = Math.round(nums.length / 2)
    console.log("majority==>",majority)
    const map = {}
    for(let i = 0; i<nums.length; i++){
  
        const cur = nums[i]

        console.log("cur",cur,"count",map[cur])
        // Increment the count of each number in the hashmap
        map[cur] = (map[cur] || 0) + 1
        // Return the first number whose count is equal to the majority
        console.log("map=>",map)
        if(map[cur]===majority) return cur;
    }
};

console.log(majorityElement([3,2,3]))