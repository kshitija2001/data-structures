var findMedianSortedArrays = function(nums1, nums2) {
    var result = [...nums1,...nums2]
    result.sort((a,b)=>a-b)
    let l = 0
    let r = result.length
    let m = Math.floor((l+r)/2)
//console.log("result=>",result)
   // console.log("m==>",m)
    if(result.length%2 === 0){
            if(m === Math.floor(result.length/2)){
                return (result[m] + result[m-1])/2
            }   
    
    }else{
        return result[m]
    }

};

console.log(findMedianSortedArrays([1,3],[2]))
console.log(findMedianSortedArrays([1,3],[2,4]))