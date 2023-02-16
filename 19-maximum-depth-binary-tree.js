// to find the  maximum depth of the tree we can apply  a simple recursive approach
// where each function call will represent a subtree which has root node called as 'root'
//we traverse the binary tree by a recursive function starting from the root node
var maxDepth = function(root) {
    //base case..
    // if the subtree is empty root is null, return depth as 0
    if(root == null) return 0;

    //if root is not null, call the same function recursively for its left child and right child
    let leftDepth = maxDepth(root.left)
    let rightDepth = maxDepth(root.right)

    //when the 2 function return its depth
    //pick the maximum out of these subtrees and return this value after adding 1 to it
    //adding 1 is the current node which is the parent of the 2 subtrees
    return Math.max(leftDepth, rightDepth) + 1;
}

// time complexity : O(n) where n is the number of nodes the tree contain
// space complexity : O(h) where h is the height of the tree.