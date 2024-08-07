var combinationSum2 = function(candidates, target) {
    let result= []
     candidates.sort((a,b)=>a-b)
    function getDifference(index,candidates,currentVal,arrWithCombinations){
    
        if(currentVal < 0) return
    
        if(currentVal === 0){
    result.push(arrWithCombinations.slice())
        }
    
        for(let j = index;j<candidates.length;j++){
            if(index !== j && candidates[j]===candidates[j-1]) continue
            arrWithCombinations.push(candidates[j])
            getDifference(j+1,candidates,currentVal - candidates[j],arrWithCombinations)
            arrWithCombinations.pop()
        }
    }
    
    getDifference(0,candidates,target,[])
    
      return result
};

console.log(combinationSum2([10,1,2,7,6,1,5],8))