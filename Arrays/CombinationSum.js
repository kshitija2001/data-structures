
var combinationSum = function (nums, target) {
    let combinations = [];
    nums.sort((a, b) => a - b);

    function backtrack(tempList, remaining, start) {
        console.log("remaining==",remaining)
        for (let i = start; i < nums.length && nums[i] <= remaining; i++) {
            console.log("nums[i]==>",nums[i])
            if (nums[i] === remaining) {
                combinations.push([...tempList, nums[i]]);
            } else {
                backtrack([...tempList, nums[i]], remaining - nums[i], i);
            }
        }
    }

    backtrack([], target, 0);
    return combinations;
};

console.log(combinationSum([2,3,6,7],7))