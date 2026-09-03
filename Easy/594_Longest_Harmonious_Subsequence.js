/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
    let count = new Map();

    for (let num of nums) {

        count.set(num, (count.get(num) || 0) + 1);
    }

    let maxLength = 0;

    for (let [num, freqency] of count) {
        if (count.has(num + 1)) {
            let length = freqency + count.get(num + 1);

            maxLength = Math.max(maxLength, length);
        }
    }
    return maxLength;

};