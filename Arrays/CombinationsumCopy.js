var combinationSum = function(candidates, target) {
  let result= []
function getDifference(index,currentVal,arrWithCombinations){

    if(currentVal < 0) return

    if(currentVal === 0){
result.push([...arrWithCombinations])
    }

    for(let i = index;i<candidates.length;i++){
        arrWithCombinations.push(candidates[i])
        getDifference(i,currentVal - candidates[i],arrWithCombinations)
        arrWithCombinations.pop()
    }
}

getDifference(0,target,[])

  return result
};

console.log(combinationSum([2,3,6,7],7))