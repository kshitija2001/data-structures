// function SubstringFunction(input) { //RECURSION
//     if (input.length === 0) {
//         return [''];
//     }
//     let first = input[0];
//     console.log("first-->",first)
//     let restSubstrings = SubstringFunction(input.slice(1));
//     console.log("restSubstrings=>",restSubstrings)
//     let substrings = restSubstrings.map(sub =>   
        
//         first + sub

//     );
//     console.log("substrings=>",substrings)
//     return [...substrings, ...restSubstrings];
// }

// console.log("output is==>",SubstringFunction("abc"))






function substringFunction(input) { //Ntested loop
    let substrings = []; 
    for (let i = 0; i < input.length; i++) { 
        for (let j = i + 1; j <= input.length; j++) { 
            substrings.push(input.slice(i, j)); 
            a = "abc"
            console.log("> length",a.slice(1,3))
        } 
    } 
    return substrings; 
} 
  
let str1 = "abc"; 
let result = substringFunction(str1); 
  
console.log(result);