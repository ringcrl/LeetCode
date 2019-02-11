/**
 * https://leetcode.com/problems/linked-list-cycle/
 * 
 * 检测链表是否有环
 * 1. 使用两个指针，slow 和 fast
 * 2. slow 一步一步地移动，fast 一次移动两步
 * 3. 如果链表有环则 slow 和 fast 会相遇
 * 
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
function hasCycle(head) {
  if (head === null || head.next === null) { return false; }

  let slow = head;
  let fast = head;

  while (fast.next !== null && fast.next.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) { return true; }
  }

  return false;
}