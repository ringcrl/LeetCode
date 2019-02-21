/*
 * @lc app=leetcode id=148 lang=javascript
 *
 * [148] Sort List
 *
 * https://leetcode.com/problems/sort-list/description/
 *
 * algorithms
 * Medium (33.70%)
 * Total Accepted:    168.2K
 * Total Submissions: 498.9K
 * Testcase Example:  '[4,2,1,3]'
 *
 * Sort a linked list in O(n log n) time using constant space complexity.
 * 
 * Example 1:
 * 
 * 
 * Input: 4->2->1->3
 * Output: 1->2->3->4
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: -1->5->3->4->0
 * Output: -1->0->3->4->5
 * 
 */
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
function sortList(head) {
  if (!head || !head.next) { return head; }
  let fast = head;
  let slow = head;
  while (fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  let second = slow.next;
  slow.next = null;
  head = sortList(head);
  second = sortList(second);
  return mergeTwo(head, second);
}

function mergeTwo(one, two) {
  const dummy = new ListNode(-1);
  let head = dummy;
  while (one && two) {
    if (one.val < two.val) {
      head.next = one;
      one = one.next;
    } else {
      head.next = two;
      two = two.next;
    }
    head = head.next;
  }
  if (one) {
    head.next = one;
  }
  if (two) {
    head.next = two;
  }
  return dummy.next;
}