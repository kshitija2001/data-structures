/**
 * @param {string} s
 * @return {number}
 */


const intToRoman = (num) => {
    const map = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };
    let result = '';
  
    for (key in map) {
        console.log("key",key)
      const repeatCounter = Math.floor(num / map[key]);
  console.log("repeatCounter",repeatCounter)
      if (repeatCounter !== 0) {
        console.log("key repet==>",key)
        key.repeat()
        result += key.repeat(repeatCounter);
        console.log("result==>",result)
      }
  
      num %= map[key];
      console.log("num%key==>",num)
      if (num === 0) return result;
    }
  
    return result;
  };

//console.log(intToRoman(3))
// console.log(intToRoman(5))
 //console.log(intToRoman(9))
 console.log(intToRoman(55))