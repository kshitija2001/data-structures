var merge = function(nums1, m, nums2, n) {
    console.log(nums1.length)
    console.log(nums2.length)
    // let result = []
    // for(i=0;i<m;i++){
    //     result.push(nums1[i])
    // }
    // for(i=0;i<n;i++){
    //     [...result,result.push(nums2[i])]
    // }

    // return result.sort()

    for(i=nums1.length;i>m;i--){
      nums1.pop(nums1[i])
    }
    console.log(nums1)
    for(i=0;i<n;i++){
        [...nums1,nums1.push(nums2[i])]
    }

    return nums1.sort((a,b)=> a- b)
};

console.log(merge([1,2,3,0,0,0],3,[2,5,6],3))
console.log(merge([1],1,[],0))
console.log(merge([0],0,[1],1))
console.log(merge(
    [-10,-10,-9,-9,-9,-8,-8,-7,-7,-7,-6,-6,-6,-6,-6,-6,-6,-5,-5,-5,-4,-4,-4,-3,-3,-2,-2,-1,-1,0,1,1,1,2,2,2,3,3,3,4,5,5,6,6,6,6,7,7,7,7,8,9,9,9,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    55,
    [-10,-10,-9,-9,-9,-9,-8,-8,-8,-8,-8,-7,-7,-7,-7,-7,-7,-7,-7,-6,-6,-6,-6,-5,-5,-5,-5,-5,-4,-4,-4,-4,-4,-3,-3,-3,-2,-2,-2,-2,-2,-2,-2,-1,-1,-1,0,0,0,0,0,1,1,1,2,2,2,2,2,2,2,2,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,6,6,6,6,6,7,7,7,7,7,7,7,8,8,8,8,9,9,9,9],
    99))
