/**
 * @param {number[]} heights
 * @return {number[]}
 */
var canSeePersonsCount = function (heights) {
    let stack = [];
    let answer = new Array(heights.length).fill(0);

    for (let i = heights.length - 1; i >= 0; i--) {

        while (stack.length > 0 && heights[i] > stack[stack.length - 1]) {

            stack.pop();
            answer[i]++;
        }
        if (stack.length > 0) {
            answer[i]++;
        }

        stack.push(heights[i]);
    }

    return answer;

};