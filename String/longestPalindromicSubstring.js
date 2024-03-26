const longestPalindrome = (str) => {
    const length = str.length;
    const dp = Array(length)
      .fill(false)
      .map(() => Array(length).fill(false));
    let maxLength = 1;
    let start = 0;
  
    // Single characters are palindromes
    for (let i = 0; i < length; i++) {
      dp[i][i] = true;
    }
  
    // Check for palindromic substrings of length 2
    for (let i = 0; i < length - 1; i++) {
      if (str[i] === str[i + 1]) {
        dp[i][i + 1] = true;
        maxLength = 2;
        start = i;
      }
    }
  
    // Check for palindromic substrings of length greater than 2
    for (let len = 3; len <= length; len++) {
      for (let i = 0; i < length - len + 1; i++) {
        const j = i + len - 1;
        if (str[i] === str[j] && dp[i + 1][j - 1]) {
          dp[i][j] = true;
          if (len > maxLength) {
            maxLength = len;
            start = i;
          }
        }
      }
    }
    return str.slice(start, start + maxLength);
  };

  const inputString = "babad";
const longestPalindromicSubstring = longestPalindrome(inputString);
console.log(longestPalindromicSubstring);


// function printSubStr(str,low,high)
// {
//     for (let i = low; i <= high; ++i)
//         console.log(str[i]);
// }
 
// // This function prints the
// // longest palindrome subString
// // It also returns the length
// // // of the longest palindrome
// function longestPalSubstr(str)
// {
//     // Get length of input String
//     let n = str.length;
  
//     // All subStrings of length 1
//     // are palindromes
//     let maxLength = 1, start = 0;
  
//     // Nested loop to mark start and end index
//     for (let i = 0; i < str.length; i++) {
//         for (let j = i; j < str.length; j++) {
//             let flag = 1;
  
//             // Check palindrome
//             for (let k = 0; k < (j - i + 1) / 2; k++)
//                 if (str[i + k] != str[j - k])
//                     flag = 0;
  
//             // Palindrome
//             if (flag!=0 && (j - i + 1) > maxLength) {
//                 start = i;
//                 maxLength = j - i + 1;
//             }
//         }
//     }
  
//     console.log("Longest palindrome substring is: ");
//     printSubStr(str, start, start + maxLength - 1);
  
//     // Return length of LPS
//     return maxLength;
// }