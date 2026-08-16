/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    if (matrix.length === 0) return 0;

    let cols = matrix[0].length;
    let heights = new Array(cols).fill(0);
    let maxArea = 0;

    for (let row of matrix) {

        // Build histogram
        for (let j = 0; j < cols; j++) {
            heights[j] = row[j] === "1"
                ? heights[j] + 1
                : 0;
        }

        maxArea = Math.max(maxArea, largestRectangle(heights));
    }

    return maxArea;
};


// Largest Rectangle in Histogram
function largestRectangle(heights) {
    let stack = [];
    let maxArea = 0;

    for (let i = 0; i <= heights.length; i++) {

        let current = i === heights.length ? 0 : heights[i];

        while (
            stack.length &&
            current < heights[stack[stack.length - 1]]
        ) {
            let height = heights[stack.pop()];

            let width = stack.length === 0
                ? i
                : i - stack[stack.length - 1] - 1;

            maxArea = Math.max(maxArea, height * width);
        }

        stack.push(i);
    }

    return maxArea;
}