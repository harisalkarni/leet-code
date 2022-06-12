/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    // initialize a dummy head node
    
    // initialize a crtNode variable to keep track of the current node, starting with the dummy head node
    
    // while there are still nodes to compare in two lists
        // if value of 2nd node is less than value of 1st node
            // set the current node's link to l2 node
            // set the l2 node to l2's next node
       // else
            // set the current node's link to l1 node
            // set the l1 node to l1's next node
        
        // move on to the next node 
            
    // if one of the lists no longer have any nodes to compare, point crt's link to the remaining nodes in the other list
    // if both lists are empty, point crt's link to null

    // return merged linked list
    var mergedHead = { val : -1, next : null },
        crt = mergedHead;
    while(l1 && l2) {
        if(l1.val > l2.val) {
            crt.next = l2;
            l2 = l2.next;
        } else {
            crt.next = l1;
            l1 = l1.next;
        }
        crt = crt.next;
    }
    crt.next = l1 || l2;
    
    return mergedHead.next;
};

//EASY TO UNDERSTAND

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  if(!l1 || !l2) return (l1? l1:l2);
  if(l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};
