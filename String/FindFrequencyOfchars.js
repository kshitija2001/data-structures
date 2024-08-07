var findFrequencyOfChars = function(str){
    let result ={}
    
    for(i=0;i<str.length;i++){
        let ch = str.charAt(i)
        console.log("ch=>",ch)
        if(!result[ch]){
            result[ch] = 1
        }
        else{
            result[ch] = result[ch]+1
        }
    }

    return result

}


console.log(findFrequencyOfChars("kshitija"))