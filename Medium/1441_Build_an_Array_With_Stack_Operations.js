/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    let result = [];
    let j = 0;

    for (let i = 1; i <= n; i++) {

        result.push("Push");

        if (i === target[j]) {
            j++;
        } else {
            result.push("Pop");
        }

        if (j === target.length) {
            break;
        }
    }

    return result;
};