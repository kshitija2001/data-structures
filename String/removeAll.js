var findAllOccurence = function(s,part){
    str= s
    N= s.length 
    K = part
     M= part.length
    //function minLength(str, N, K, M)
   // {
     
        // Initialize stack of characters
        var stackOfChar = [];
     
        for (var i = 0; i < N; i++) {
     
            // Push character into the stack
            stackOfChar.push(str[i]);
     
            // If stack size >= K.size()
            if (stackOfChar.length >= M) {
     
                // Create empty string to
                // store characters of stack
                var l = "";
     
                // Traverse the string K in reverse
                for (var j = M - 1; j >= 0; j--) {
     
                    // If any of the characters
                    // differ, it means that K
                    // is not present in the stack
                    if (K[j] != stackOfChar[stackOfChar.length-1]) {
     
                        // Push the elements
                        // back into the stack
                        var f = 0;
                        while (f != l.length) {
     
                            stackOfChar.push(l[f]);
                            f++;
                        }
     
                        break;
                    }
     
                    // Store the string
                    else {
     
                        l = stackOfChar[stackOfChar.length-1]
                            + l;
     
                        // Remove top element
                        stackOfChar.pop();
                    }
                }
            }
        }
     
        // Size of stack gives the
        // minimized length of str
        return stackOfChar.join("")
  //  }
}


  // Driver code
//   var str1 = "daabcbaabcbcabc";
//   var  str2 = "abc";
//     var str1 = "geeksforgeeks";
//   var str2 = "geeks";
var str1 = "aabababa";
 var str2 = "aba";
  console.log(findAllOccurence(str1, str2));