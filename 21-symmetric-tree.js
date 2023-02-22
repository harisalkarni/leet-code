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
 * @return {boolean}
 */

//recursive method
var isSymmetric = function(root) {
    return isMirror(root.left, root.right)
}

const isMirror = (t1, t2) => {
    // if both node is empty then its true but if it just 1 node that empty then it will return false
    if(t1 === null && t2 === null) return true;
    if(t1 === null || t2 === null) return false;


    // if the node value is equal and node left and right is equal and node right and left is equal then return true
    return (t1.val === t2.val) && isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left)
}

// time complexity = O(n) because we need to check every single node
// space complexity = O(h) where h is the tree height, how much data that tree stored