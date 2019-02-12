/*
 * @lc app=leetcode id=23 lang=javascript
 *
 * [23] Merge k Sorted Lists
 *
 * https://leetcode.com/problems/merge-k-sorted-lists/description/
 *
 * algorithms
 * Hard (32.56%)
 * Total Accepted:    331.5K
 * Total Submissions: 1M
 * Testcase Example:  '[[1,4,5],[1,3,4],[2,6]]'
 *
 * Merge k sorted linked lists and return it as one sorted list. Analyze and
 * describe its complexity.
 * 
 * Example:
 * 
 * 
 * Input:
 * [
 * 1->4->5,
 * 1->3->4,
 * 2->6
 * ]
 * Output: 1->1->2->3->4->4->5->6
 * 
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = (lists, low = 0, height = lists.length - 1) => {
  if (lists.length === 0) {
    return null;
  }

  if (low === height) {
    return lists[low];
  }

  const mid = Math.floor((height + low) / 2);
  const left = mergeKLists(lists, low, mid);
  const right = mergeKLists(lists, mid + 1, height);

  return mergeTwoLists(left, right);
};

const mergeTwoLists = (l1, l2) => {
  if (l1 == null) {
    return l2;
  }
  if (l2 == null) {
    return l1;
  }
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};