/**
 * https://leetcode.com/problems/linked-list-cycle/
 * 
 * 1. 使用两个指针，walker 和 runner
 * 2. walker 一步一步地移动，runner 一次移动两步
 * 3. 如果链表有环则 walker 和 runner 会相遇
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
  if (head === null) { return false; }

  let walker = head;
  let runner = head;

  while (runner.next !== null && runner.next.next !== null) {
    walker = walker.next;
    runner = runner.next.next;
    if (walker === runner) { return true; }
  }

  return false;
}