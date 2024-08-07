// var inorderTraversal = function(root) {
//     var res = [];
//     helper(root, res);
//     return res;
//   };
  
//   var helper = function (root, res) {
//     if (!root) return;
//     if (root.left) helper(root.left, res);
//     res.push(root.val);
//     if (root.right) helper(root.right, res);
//   };

  var inorderTraversal = function(root) {
    var stack = [];
    var now = root;
    var res = [];
  
    while (now || stack.length) {
      while (now) {
        stack.push(now);
        now = now.left;
      }
      now = stack.pop();
      res.push(now.val);
      now = now.right;
    }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
    return res;
  };

console.log(inorderTraversal([1,null,2,3]))