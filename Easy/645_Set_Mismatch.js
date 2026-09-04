/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
    let count = new Map();

    for (let num of nums) {
        count.set(num, (count.get(num) || 0) + 1);
    }

    let duplicate = 0;
    let missing = 0;

    for (let i = 1; i <= nums.length; i++) {
        if (count.get(i) === 2) {
            duplicate = i;
        }

        if (!count.has(i)) {
            missing = i;
        }
    }

    return [duplicate, missing];

};