class TreeNode {
    constructor(val = 0, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  function isEvenOddTree(root) {
    if (!root) {
      return true;
    }
  
    const queue = [root];
    let level = 0;
  
    while (queue.length > 0) {
      const size = queue.length;
      let curr = -1
      let prevValue = level % 2 === 0 ? -Infinity : Infinity;
  
      for (let i = 0; i < size; i++) {
        const node = queue.shift();
        const { val, left, right } = node;
  
        if (
          (level % 2 === 0 && (val % 2 !== 1 || val <= prevValue)) ||
          (level % 2 === 1 && (val % 2 !== 0 || val >= prevValue))
        ) {
          return false;
        }
  
        if (left) {
          queue.push(left);
        }
        if (right) {
          queue.push(right);
        }
  
        prevValue = val;
      }
  
      level++;
    }
  
    return true;
  }
  
  // Driver code to test the function
  // We'll create the following tree:
  //     1
  //    / \
  //   10  4
  //  /  \  \
  //  3   7   9
  const root = new TreeNode(1);
  root.left = new TreeNode(10);
  root.right = new TreeNode(4);
  root.left.left = new TreeNode(3);
  root.left.right = new TreeNode(7);
  root.right.right = new TreeNode(9);
  
  console.log(isEvenOddTree(root))