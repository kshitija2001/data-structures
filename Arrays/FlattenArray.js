var flattenArray = function (arr){
// return arr.flat(Infinity)
//return [].concat.apply([],arr)
//return [].concat(...arr)
// return arr.reduce((acc,currentEl)=>{
// return acc.concat(currentEl)
// })

// const res = []

// arr.forEach(element => {
//     res.push(...element)
// });
// return res

var flattened_arr = [];
      for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
          flattened_arr = flattened_arr.concat(flattenArray(arr[i]));
        } else {
          flattened_arr.push(arr[i]);
        }
      }
      return flattened_arr;
}

console.log(flattenArray([[1],[2],[[3],[4],[[5,[6]]]]]))