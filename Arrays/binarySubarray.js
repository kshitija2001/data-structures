
class Solution {
    // Function to find count of subarrays with sum at most k
    atmost(nums, k) {
        if (k < 0) {
            return 0;
        }
        let l = 0;
        let cnt = 0;
        let res = 0;
 
        for (let i = 0; i < nums.length; i++) {
            cnt += nums[i];
 
            // Adjust the window sum by removing elements
            // from the left until it is at most k
            while (cnt > k) {
                cnt -= nums[l++];
            }
 
            // Add the count of subarrays with sum at most k
            // for the current window
            res += (i - l + 1);
        }
 
        return res;
    }
 
    // Function to find count of subarrays with sum equal to k
    numSubarraysWithSum(nums, goal) {
        // Call atmost(nums, goal) and atmost(nums, goal-1)
        // to get the count of subarrays with sum at most
        // goal and sum at most goal-1 respectively, then
        // subtract them to get the count of subarrays with
        // sum exactly equal to goal
        return this.atmost(nums, goal) - this.atmost(nums, goal - 1);
    }
}

const solution = new Solution();
 
const arr1 = [1, 0, 1, 1, 0, 1];
const k1 = 2;
console.log("Count of subarrays with sum " + k1 + ": " + solution.numSubarraysWithSum(arr1, k1));