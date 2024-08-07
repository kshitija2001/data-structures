var lengthOfLastWord = function(s) {
    const splitted = s.trim().replace(/\s+/g, ' ').split(" ")
return splitted[splitted.length - 1].length
   // console.log("splitted==>",splitted)
};

console.log(lengthOfLastWord("Hello World"))
console.log(lengthOfLastWord("   fly me   to   the moon  "))