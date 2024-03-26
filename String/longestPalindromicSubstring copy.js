/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let start = 0, maxLen = 0;

  const expandAroundCenter = (left, right) => {
      while (left >= 0 && right < s.length && s[left] === s[right]) {
          left--;
          right++;
      }
      return right - left - 1;
  };

  for (let i = 0; i < s.length; i++) {
      const len1 = expandAroundCenter(i, i);
      const len2 = expandAroundCenter(i, i + 1);
      console.log("len1-->",len1)
      console.log("len2-->",len2)
      const maxLength = Math.max(len1, len2);
      if (maxLength > maxLen) {
          start = i - Math.floor((maxLength - 1) / 2);
          maxLen = maxLength;
      }
  }

  return s.substring(start, start + maxLen);
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