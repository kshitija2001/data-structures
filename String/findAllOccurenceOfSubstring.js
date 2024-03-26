var findAllOccurence = function(str,s){
    var flag = false
    for(i=0;i<str.length;i++){
        console.log("str.substring(i,s.length+i)==>",str.substring(i,s.length+i))
        if(str.substring(i,s.length+i) === s){
            console.log("i=>",i)
            flag = true
        }

        
    }
    
    
if(flag === false){
    return "NONE"
}
}

//   // Driver code
  var str1 = "daabcbaabcbc";
  var str2 = "abc";
//   var str1 = "geeksforgeeks";
//   var str2 = "geeks";
  findAllOccurence(str1, str2);