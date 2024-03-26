

function longestUniqueSubsttr(str) {
    // if string length is 0
    if (str.length === 0)
        return 0;
 
    // if string length 1
    if (str.length === 1)
        return 1;
 
    // if string length is more than 2
    let maxLength = 0;
    let visited = new Array(256).fill(false);
 
    // left and right pointer of sliding window
    let left = 0, right = 0;
    while (right < str.length) {
 
        // if character is visited
        if (visited[str.charCodeAt(right)]) {
 
            // The left pointer moves to the right while
            // marking visited characters as false until the
            // repeating character is no longer part of the
            // current window.
            while (visited[str.charCodeAt(right)]) {
                visited[str.charCodeAt(left)] = false;
                left++;
            }
        }
 
        visited[str.charCodeAt(right)] = true;
 
        // The length of the current window (right - left + 1)
        // is calculated and the answer is updated accordingly.
        maxLength = Math.max(maxLength, right - left + 1);
        right++;
    }
 console.log("maxLength==>",maxLength)
    return maxLength;
}
longestUniqueSubsttr("abcabcbb")