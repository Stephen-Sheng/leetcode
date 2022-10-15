// 给你两个 非空 链表来代表两个非负整数。数字最高位位于链表开始位置。它们的每个节点只存储一位数字。将这两数相加会返回一个新的链表。
// 你可以假设除了数字 0 之外，这两个数字都不会以零开头。
// 示例1：
// 输入：l1 = [7,2,4,3], l2 = [5,6,4]
// 输出：[7,8,0,7]

// 示例2：
// 输入：l1 = [2,4,3], l2 = [5,6,4]
// 输出：[8,0,7]

// 示例3：
// 输入：l1 = [0], l2 = [0]
// 输出：[0]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let stack1 = []
    let stack2 = []
    let result = new ListNode()
    let digit = 0
    while(l1){
        stack1.push(l1.val)
        l1 = l1.next
    }
    while(l2){
        stack2.push(l2.val)
        l2 = l2.next
    }
    while(stack1.length || stack2.length){
        let val1 = stack1.length ? stack1.pop() : 0
        let val2 = stack2.length ? stack2.pop() : 0
        let total = (val1 + val2 + digit) % 10
        digit = Math.floor((val1+val2+digit)/10)
        let node = new ListNode(total,result.next)
        result.next = node
    }
    if(digit !== 0){
        let node = new ListNode(digit,result.next)
        result.next = node
    }
    return result.next
};
