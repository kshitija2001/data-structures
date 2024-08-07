var longestCommonPrefix = function(strs) {
    let prefix =[]
  for(let i=0;i<strs.length;i++){
    console.log("i",i)
    s1 = strs[i].toLowerCase()
    s2 = strs[i+1].toLowerCase()
    console.log("s1==>",s1)
    console.log("s1==>",s2)
    let j=0
    while(i<strs.length){
   console.log("inside while loop")
   console.log("j=>",j,s1[j],s2[j])
        if(s1[j] === s2[j]){
            prefix.push(s1[j])
            j++
        }
        i++
    }

    
  }
  console.log("prefix==>",prefix)
    
};

longestCommonPrefix(["flower","flow","flight"])