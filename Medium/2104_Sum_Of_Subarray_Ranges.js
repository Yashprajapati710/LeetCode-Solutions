/**
 * @param {number[]} nums
 * @return {number}
 */
var subArrayRanges = function (nums) {
    let total = 0;

    for (let i = 0; i < nums.length; i++) {

        let min = nums[i];
        let max = nums[i];

        for (let j = i; j < nums.length; j++) {
            min = Math.min(min, nums[j]);
            max = Math.max(max, nums[j]);

            total += max - min;
        }
    }
    return total;

};