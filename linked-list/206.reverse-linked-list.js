/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
 *
 * https://leetcode.com/problems/reverse-linked-list/description/
 *
 * algorithms
 * Easy (52.40%)
 * Total Accepted:    506.9K
 * Total Submissions: 967.2K
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * Reverse a singly linked list.
 * 
 * Example:
 * 
 * 
 * Input: 1->2->3->4->5->NULL
 * Output: 5->4->3->2->1->NULL
 * 
 * 
 * Follow up:
 * 
 * A linked list can be reversed either iteratively or recursively. Could you
 * implement both?
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
 * 反转链表
 * 1. 先记录一个 newNext 为 null
 * 2. 四部曲，每次下一步要改的值为上一步的右边的值
 * 3. 返回 newNext
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function(head) {
  if (head === null || head.next === null) {
    return head;
  }

  let newNext = null;
  while (head !== null) {
    const oldNext = head.next;
    head.next = newNext;
    newNext = head;
    head = oldNext;
  }

  return newNext;
};
