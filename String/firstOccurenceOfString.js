var strStr = function(haystack, needle) {
 flag = false
for(i=0;i<haystack.length;i++){
    console.log("haystack.substring(i,needle.length + 1)=>",haystack.substring(i,needle.length + i))
    if(haystack.substring(i,needle.length + i) === needle){
        flag = true
      
    }
    if(flag){
return i
    }
}

  if(!flag){
    return -1
  }
};

console.log(strStr("sadbutsad","sad"))
console.log(strStr("leetcode",
"leeto"))