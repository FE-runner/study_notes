/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head || !head.next) {
    return head;
  }
  if (!head.next.next) {
    let next = head.next;
    let temp = head;
    next.next = temp;
    temp.next = null;
    return next;
  }
  
  while (head){
    head=aa(head.next.next)
  
  
  }
  function aa(nextnext) {
  
  
  }
  
  
  
};
