var findDuplicate = function(nums){
let count = 0
        if (nums.length === 0) return 0
       let dupliElement = []
let start = 0
let next = 1
        while(start <= nums.length){
            if(nums[start] == nums[next] ){
                count = count + 1
                if(nums[next]){
                    dupliElement.push(nums[next])
                }
    
            }
         start ++
            next ++
        
        }
       return  `element :${dupliElement.shift()} with count: ${count}`  
}


//console.log(findDuplicate([0,1,1,1,3]))
//console.log(findDuplicate([1,2,3,5,5,6,7]))
//console.log(findDuplicate([1,2,3,3,4,6,7]))
console.log(findDuplicate([1,2,3,4,6,6,6,6,6,6,6,6,7]))