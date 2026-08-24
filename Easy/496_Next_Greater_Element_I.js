/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    let stack = [];
    let nextGreater = new Map();

    for (let num of nums2) {

        while (stack.length > 0 && num > stack[stack.length - 1]) {

            let smaller = stack.pop();

            nextGreater.set(smaller, num);
        }
        stack.push(num);
    }

    while (stack.length > 0) {

        nextGreater.set(stack.pop(), -1);
    }

    let result = [];

    for (let num of nums1) {
        result.push(nextGreater.get(num));
    }

    return result;

};