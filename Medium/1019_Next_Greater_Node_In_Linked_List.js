/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nextLargerNodes = function (head) {
    let values = [];
    let current = head;

    while (current !== null) {

        values.push(current.val)
        current = current.next;
    }

    let result = new Array(values.length).fill(0);
    let stack = [];

    for (let i = 0; i < values.length; i++) {

        while (stack.length > 0 && values[i] > values[stack[stack.length - 1]]) {

            let index = stack.pop();
            result[index] = values[i];
        }
        stack.push(i);
    }
    return result;

};