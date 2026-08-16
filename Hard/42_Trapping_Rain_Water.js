/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let stack = [];
    let water = 0;

    for (let i = 0; i < height.length; i++) {

        while (stack.length > 0 && height[i] > height[stack[stack.length - 1]]) {

            let bottom = stack.pop();

            if (stack.length === 0) {

                break;
            }
            let left = stack[stack.length - 1];
            let width = i - left - 1;

            let h = Math.min(height[left], height[i]) - height[bottom];

            water += width * h;
        }
        stack.push(i);
    }

    return water;

};