/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {

    let firstMax = -Infinity;
    let secondMax = -Infinity;
    let thirdMax = -Infinity;

    for (let num of nums) {

        // Ignore duplicates
        if (num === firstMax || num === secondMax || num === thirdMax) {
            continue;
        }

        if (num > firstMax) {

            thirdMax = secondMax;
            secondMax = firstMax;
            firstMax = num;

        } else if (num > secondMax) {

            thirdMax = secondMax;
            secondMax = num;

        } else if (num > thirdMax) {

            thirdMax = num;

        }

    }

    return thirdMax === -Infinity ? firstMax : thirdMax;

};