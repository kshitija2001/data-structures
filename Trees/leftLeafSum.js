var sumOfLeftLeaves = function(root) {

    let sum = 0
    if(root != null){
if(isLeaf(root.left)){
    sum = sum + root.left.val
}else{
    sum = sum + sumOfLeftLeaves(root.left)
   
}
sum = sum + sumOfLeftLeaves(root.left)
    }
    return sum
};

var isLeaf = function(node){
    if(node== null){
        return false
    }
    if(node.left ==null && node.right == null){
        return true
    }

    return false
}

console.log(sumOfLeftLeaves([3,9,20,null,null,15,7]))