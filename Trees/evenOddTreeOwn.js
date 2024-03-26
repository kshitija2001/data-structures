class TreeNode {
constructor(val = 0, left = null, right = null){
    this.val = val
    this.left = left
    this.right = right
}

  evenOddTree(root){
     
    if(!root){
        return true
        }
    const q=[root]
    console.log("q outside==>",q)
    let level = 0;
   
   
    while(q.length>0){
      
        console.log("q==>",q)
    const size = q.length
    console.log("size==>",size)
    let prev = level % 2 === 0 ? -Infinity : Infinity;
  
    for(let i=0;i<size;i++){
         
    const node = q.shift()
    const { val, left, right } = node;
    console.log("node==>",node)
    console.log("level ==>",level)
    console.log("level % 2==>",level % 2)
    console.log("val==>",val)
    console.log("val % 2==>",val % 2)
    console.log("prev==>",prev)
 
    if(level % 2 === 0 && val % 2 === 0){
    return false
    }
    
    if(level % 2 === 1 && val % 2 === 1){
    return false
    }

    if(level % 2 === 0 && val <=prev){
        return false
        }
        
    if(level % 2 === 1 && val >=prev){
        return false
        }

    if(left){
        console.log("left==>",left)
        q.push(left)
        }
        
        if(right){
            console.log("right==>",right)
        q.push(right)
        }

    prev = val
  
    }
  
    level = level + 1
    console.log("level + 1==>",level)
    }//end while
    return true
    }//end function

}


const root = new TreeNode(1);
root.left = new TreeNode(4);
root.right = new TreeNode(10);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(7);
root.right.right = new TreeNode(9);

console.log(root.evenOddTree(root))


// const newrRoot = new TreeNode(5);
// newrRoot.left = new TreeNode(4);
// newrRoot.right = new TreeNode(2);
// newrRoot.left.left = new TreeNode(3);
// newrRoot.left.right = new TreeNode(3);
// newrRoot.right.left = new TreeNode(7);

// console.log(root.evenOddTree(newrRoot))