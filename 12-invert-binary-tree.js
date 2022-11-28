/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

//Recursive method it calls their own function
 var invertTree = function(root) {
    
    if(root !== null){  // function running if the root is not equal with null
        const tmp = root.left  //create tmp object for root left
        root.left = invertTree(root.right) // calling the function(recursive) and invert the root.right
        root.right = invertTree(tmp) //calling the function(recursive) again and invert the tmp object that actually a root.left
    }
     return root; // lastly return the root again after it get inverted
     
 };


 // iterative method
 var invertTree = function(root) {
    
   const stack = [root];
   while(stack.length){
    const node = stack.pop();
    if(node !== null){
        stack.push(node.left);
        stack.push(node.right);
        const tmp = node.left;
        node.left = node.right;
        node.right = tmp;
    }
   }
    return root
};